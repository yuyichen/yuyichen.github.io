import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import img from "@/assets/imgs/404.webp";

export default () => (
  <div className="w-full h-full flex flex-col">
    <Header />
    <div className="flex items-center justify-center" style={{ flex: 1 }}>
      <span className="text-center">
        <img src={img} alt="404" className="shadow-lg" />
        <div className="text-gray-500 text-xl mt-6">你访问的页面不存在</div>
      </span>
    </div>
    <Footer />
  </div>
);
