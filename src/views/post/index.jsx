import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Markdown from "markdown-to-jsx";
import { Link, useLocation, useParams } from "react-router-dom";
import services from "@/services";
import Loading from "@/components/Loading";
import logo from "@/assets/imgs/logo.png";

export default (props) => {
  const [scrollPercent, setScrollPercent] = useState("0%");
  const [headerFixed, setHeaderFixed] = useState(false);
  const [loading, setLoading] = useState(false);
  const locationData = useLocation();
  const { title } = useParams();
  const [postData, setPostData] = useState(locationData?.state?.postData || {});

  const listenPageScroll = () => {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";

    document.addEventListener("scroll", function () {
      const scroll =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
      setScrollPercent(`${scroll}%`);

      setHeaderFixed(window.scrollY > 100);
    });
  };

  const getPostData = async () => {
    if (!locationData?.state?.postData) {
      setLoading(true);
      const list = await services.gists().finally(() => {
        setLoading(false);
      });
      setPostData(list?.files[title] || {});
    }
  };

  useEffect(() => {
    listenPageScroll();
    getPostData();
  }, []);

  return (
    <div className="">
      <Header />
      <div
        id="header"
        className={`bg-white fixed w-full z-10 top-0 animate__animated ${
          headerFixed ? "animate__slideInDown" : "hidden animate__fadeOutUp"
        }`}
        style={{ opacity: 0.95 }}
      >
        <div className="bg-white">
          <div className="flex flex-wrap items-center content-center">
            <div className="flex w-1/2 justify-start text-white font-extrabold">
              <a
                className="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2 items-center"
                href="#"
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: 40 }}
                  className="vertical-middle"
                />
                <span className="hidden w-0 md:w-auto md:block pl-1">
                  羽衣尘的博客
                </span>
              </a>
            </div>
            <div className="flex w-1/2 justify-end content-center pr-6">
              <div className="hidden sm:block mr-3 text-center p-4 text-xs">
                <Link
                  to={{ pathname: `/editPost/${title}`, state: { postData } }}
                >
                  编辑
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          id="progress"
          className="h-1 bg-white shadow"
          style={{
            background: `linear-gradient(to right, #4dc0b5 ${scrollPercent}, transparent 0)`,
          }}
        ></div>
      </div>

      <div
        className="container w-full max-w-6xl mx-auto bg-gray-100 bg-cover bg-center mt-8 rounded"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/1920x800/?nature')",
          height: "60vh",
        }}
      ></div>

      <div className="container max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div
            className="bg-white w-full p-8 md:p-16 markdown"
            style={{
              minHeight: "calc(60vh - 80px)",
            }}
          >
            <Markdown>{postData?.content || ""}</Markdown>
          </div>
        </div>
      </div>
      <Loading loading={loading} />

      <Footer />
    </div>
  );
};
