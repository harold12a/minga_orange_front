import React from "react";
import { RiCloseFill } from "react-icons/ri";
const Display = ({ show, setShow }) => {
  return (
    <>
      <nav className="bg-blue-600 absolute z-20 top-0 left-0 h-full w-full  xl:w-[300px] flex flex-col  ">
        <div className="text-white flex justify-around mt-2 ">
          <img src="../../src/assets/images/Rectangle 10.svg" alt="" />
          <div className="pr-[10%]">
            <h1>HAROLD ALZATE AYALA</h1>
            <h2>haroldalzate99@gmail.com</h2>
          </div>
          <RiCloseFill
            className="w-[5vh] h-[5vh]"
            onClick={() => setShow(!show)}
          />
        </div>

        <ul className=" flex flex-col justify-center  py-[10%] px-8">
          <li>
            <a href="#" className="text-white text-2xl ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl">
              Mangas
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl">
              My Mangas
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl">
              Favorites
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Display;
