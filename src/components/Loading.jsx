import React from "react";
import img from "@/assets/imgs/loading.svg";

export default (props) => {
  const { loading = true } = props;
  return (
    <div
      className={`fixed inset-0 overflow-hidden animate__animated ${
        loading ? "" : "hidden animate__fadeOut"
      }`}
    >
      <img src={img} className="w-full h-full" />
    </div>
  );
};
