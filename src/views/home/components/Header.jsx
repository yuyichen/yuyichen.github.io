import React from "react";
import coverImg from "@/assets/imgs/cover.jpg";
import dayjs from "dayjs";

import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

export default (props) => {
  const { listData } = props;

  const differTime = dayjs
    .duration(dayjs(listData.updated_at).diff(dayjs()))
    .humanize(true);

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
        <span
          className="px-6 py-4 inline-block rounded"
          style={{ backgroundColor: "rgba(238, 238, 238, .4)" }}
        >
          <p className="text-xl md:text-2xl text-gray-200">欢迎来到我的博客</p>
          {listData?.updated_at && (
            <div className="text-gray-300 mt-2">更新于{differTime}</div>
          )}
        </span>
      </div>
    </div>
  );
};
