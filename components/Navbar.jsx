import React from "react";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <Logo />
        {/* <!-- Logo Ends --> */}

        <div className="flex gap-4 items-center">
          {/* <!-- Language Dropdown --> */}
          <div className="relative">
            {/* <button className="flex items-center gap-2">
              <img
                className="max-w-8"
                src="./assets/images/bd.png"
                alt="bangla"
              />
              Bangla
            </button> */}

            {/* <!-- dropdown --> */}
            {/* <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
              <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                <img
                  className="max-w-8"
                  src="./assets/images/bd.png"
                  alt="bangla"
                />
                Bangla
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                <img
                  className="max-w-8"
                  src="./assets/images/usa.png"
                  alt="bangla"
                />
                English
              </li>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
