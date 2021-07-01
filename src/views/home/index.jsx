import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Post from "./components/Post";
import Footer from "@/components/Footer";
import services from "@/services";
import Loading from "@/components/Loading";

export default () => {
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState({});

  const getList = async () => {
    setLoading(true);
    const res = await services.gists().finally(() => {
      setLoading(false);
    });
    setListData(res);
  };

  useEffect(() => {
    getList();
  }, []);

  const postList = Object.values(listData?.files || {});

  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal">
      <Header listData={listData} />
      <div
        className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32"
        style={{
          minHeight: "calc(100vh - 440px)",
        }}
      >
        <div className="mx-0 sm:mx-6 mb-6 md:mb-12">
          <Nav />
          <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
            {postList.length > 0 && <Post layout={1} postData={postList[0]} />}
            {postList.length > 1 && (
              <div className="flex flex-wrap justify-between pt-12 -mx-6">
                {postList.slice(1).map((x) => (
                  <Post key={x.filename} layout={3} postData={x} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <Loading loading={loading} />
    </div>
  );
};
