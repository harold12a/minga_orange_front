import React from "react";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex-none order-1 flex-grow-0 w-54 h-32 relative">
      <div className="w-full absolute flex justify-between items-center p-2">
        <RiMenuLine className="w-8 h-8 fill-current text-indigo-700 xl:text-white  " />
        <img
          src="../../src/assets/images/Logo(1) 3.png"
          alt=""
          className=" top-5  xl:pr-2 "
        />
      </div>
    </div>
  );
};

export default Navbar;
