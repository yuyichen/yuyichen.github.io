import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const { layout = 3, postData = {} } = props;
  console.log(postData)
  const coverUrl = "https://source.unsplash.com/800x600/?nature";
  if (layout === 1) {
    return (
      <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
        <Link
          to={`/post/${postData.id}`}
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <div className="w-full md:w-2/3 rounded-t">
            <img
              src="https://source.unsplash.com/800x600/weekly/?nature"
              className="h-full w-full shadow"
            />
          </div>

          <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
                {postData.filename}
              </div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                This starter template is an attempt to replicate the default
                Ghost theme "Casper" using Tailwind CSS and vanilla Javascript.
              </p>
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
    <div
      className={`w-full md:w-1/${layout} p-6 flex flex-col flex-grow flex-shrink`}
    >
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link
          to={`/post/${postData.id}`}
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <img src={coverUrl} className="h-64 w-full rounded-t pb-6" />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6">
            GETTING STARTED
          </p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
            Lorem ipsum dolor sit amet.
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
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
