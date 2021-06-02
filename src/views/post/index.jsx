import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default (props) => {
  const [scrollPercent, setScrollPercent] = useState("0%");
  const [headerFixed, setHeaderFixed] = useState(false);

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

  useEffect(() => {
    listenPageScroll();
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
                className="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2"
                href="#"
              >
                <span className="hidden w-0 md:w-auto md:block pl-1">
                  羽衣尘的博客
                </span>
              </a>
            </div>
            <div className="flex w-1/2 justify-end content-center">
              <p className="hidden sm:block mr-3 text-center h-14 p-4 text-xs">
                {/* <span className="pr-2">Share this</span> 👉 */}
              </p>
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
        className="container w-full max-w-6xl mx-auto bg-white bg-cover bg-center mt-8 rounded"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/collection/1118905/')",
          height: "40vh",
        }}
      ></div>

      <div className="container max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div className="bg-white w-full p-8 md:p-16 md:text-2xl text-gray-800 leading-normal markdown" style={{
            minHeight: 'calc(60vh - 80px)'
          }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere
            maiores harum earum doloremque voluptas omnis molestias, eaque odio
            similique quasi! Iusto distinctio nostrum ducimus deleniti dolor
            doloremque accusantium debitis?
          </div>
        </div>
      </div>
    
    <Footer/>
    </div>
  );
};
