import React from "react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/imgs/logo.png";

export default (props) => {
  return (
    <nav className="bg-gray-900 p-4 mt-0 w-full">
      <div className="container mx-auto flex items-center">
        <div className="flex text-white font-extrabold">
          <NavLink
            to="/"
            className="flex text-white text-base no-underline hover:text-white hover:no-underline items-center"
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: 64, filter: "invert(1)" }}
            />
            <span className="hidden w-0 md:w-auto md:block pl-1">
              羽衣尘的博客
            </span>
          </NavLink>
        </div>
        <div className="flex pl-4 text-sm">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-2">
              <NavLink
                to="/"
                className="inline-block py-2 px-2 text-white no-underline"
              >
                HOME
              </NavLink>
            </li>
            {/* <li className="mr-2">
              <NavLink
                to="/"
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                href="#"
              >
                LINK
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
