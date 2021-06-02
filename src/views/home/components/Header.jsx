import React from "react";
import coverImg from '@/assets/imgs/cover.jpg'

export default () => {
  return (
    <div
      className="w-full m-0 p-0 bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${coverImg})`,
        height: "60vh",
        maxHeight: 460,
      }}
    >
      <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
        <p className="text-white font-extrabold text-3xl md:text-5xl mb-4">
          羽衣尘
        </p>
        <p className="text-xl md:text-2xl text-gray-500">欢迎来到我的博客</p>
      </div>
    </div>
  );
};
