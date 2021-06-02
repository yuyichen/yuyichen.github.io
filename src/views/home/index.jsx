import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Post from "./components/Post";
import Footer from "@/components/Footer";

export default () => {
  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal">
      <Header />
      <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        <div class="mx-0 sm:mx-6">
          <Nav/>
          <div class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
            <Post layout={1}/>
            <div class="flex flex-wrap justify-between pt-12 -mx-6">
              <Post layout={3}/>
              <Post layout={3}/>
              <Post layout={3}/>
              <Post layout={3}/>
              <Post layout={3}/>
              <Post layout={3}/>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
};
