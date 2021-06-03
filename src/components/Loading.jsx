import React from "react";
import img from "@/assets/imgs/loading.svg";

export default (props) => {
  return (
    <div className={`fixed inset-0 overflow-hidden ${props.className}`}>
      <img src={img} className="w-full h-full" />
    </div>
  );
};
