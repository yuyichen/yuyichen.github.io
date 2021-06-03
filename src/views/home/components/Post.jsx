import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const { layout = 3, postData = {} } = props;
  if (layout === 1) {
    return (
      <div className="flex w-full h-full bg-white rounded overflow-hidden shadow-lg">
        <Link
          to={{
            pathname: `/post/${postData.filename}`,
            state: {
              postData,
            },
          }}
          className="w-full flex flex-wrap no-underline hover:no-underline"
        >
          <div
            className="w-full md:w-2/3 bg-gray-100 h-0 overflow-visible bg-center bg-cover"
            style={{
              paddingBottom: "50%",
              backgroundImage: `url(https://source.unsplash.com/800x600/weekly/?nature)`,
            }}
          />

          <div
            className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink h-0 relative"
            style={{ paddingBottom: "50%" }}
          >
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden absolute inset-0 linear-bg">
              <div className="w-full font-bold text-xl text-gray-900 px-6 pt-6 pb-3">
                {postData.filename}
              </div>
              <div className="text-gray-500 font-serif text-base px-6 mb-5">
                {postData.content}
              </div>
            </div>

            {/* <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-between">
                <img
                  className="w-8 h-8 rounded-full mr-4 avatar"
                  data-tippy-content="Author Name"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
              </div>
            </div> */}
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className={`w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink`}>
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link
          to={{
            pathname: `/post/${postData.filename}`,
            state: {
              postData,
            },
          }}
          className="w-full flex flex-wrap no-underline hover:no-underline"
        >
          <div
            className="w-full h-0 bg-center bg-cover overflow-visible"
            style={{
              paddingBottom: "50%",
              backgroundImage: `url(https://source.unsplash.com/random/800x600/?nature&v=${postData.filename.length})`,
            }}
          />
          <div
            className="relative w-full h-0 relative linear-bg"
            style={{
              paddingBottom: "31%",
            }}
          >
            <div className="absolute inset-0">
              <div className="w-full font-bold text-xl text-gray-900 px-6 pt-6 pb-3">
                {postData.filename}
              </div>
              <div className="text-gray-500 font-serif text-base px-6 mb-5">
                {postData.content}
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-between">
          <img
            className="w-8 h-8 rounded-full mr-4 avatar"
            data-tippy-content="Author Name"
            src="http://i.pravatar.cc/300"
            alt="Avatar of Author"
          />
          <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
        </div>
      </div> */}
    </div>
  );
};
