import React from "react";
import { RiCloseFill } from "react-icons/ri";
const Display = ({ show, setShow }) => {
  return (
    <>
      <nav className="bg-blue-600 absolute z-20 top-0 left-0 h-full w-full  xl:w-[300px] flex flex-col  ">
        <div className="text-white flex justify-around mt-2 ">
          <img src="../../src/assets/images/Rectangle 10.svg" alt="" />
          <div className="pr-[10%] md:pr-[50%] xl:pr-[2%]">
            <h1>HAROLD ALZATE AYALA</h1>
            <h2>haroldalzate99@gmail.com</h2>
          </div>
          <RiCloseFill
            className="w-[5vh] h-[5vh]"
            onClick={() => setShow(!show)}
          />
        </div>

        <ul className=" flex flex-col justify-center  py-[10%] px-6">
          <li className="mb-2" >
            <a href="#" className="text-white text-2xl hover:bg-white  hover:text-blue-600 rounded-lg pr-[72%] pt-2 pb-2 pl-4 md:pr-[75%] xl:pr-[66%]">
              Home
            </a>
          </li>
          <li  className="mb-2">
            <a href="#" className="text-white text-2xl  hover:bg-white  hover:text-blue-600 rounded-lg pr-[67%] pt-2 pb-2 pl-4 md:pr-[72%] xl:pr-[58%] ">
              Mangas
            </a>
          </li>
          <li  className="mb-2 ">
            <a href="#" className="text-white text-2xl  hover:bg-white  hover:text-blue-600 rounded-lg pr-[55%] pt-2 pb-2 pl-4 md:pr-[67%] xl:pr-[42%]">
            My Mangas
            </a>
          </li>
          <li  className="mb-2">
            <a href="#" className="text-white text-2xl  hover:bg-white  hover:text-blue-600 rounded-lg pr-[63%] pt-2 pb-2 pl-4 md:pr-[71%]  xl:pr-[53%]">
              Favorites
            </a>
          </li>
          <li  className="mb-2">
            <a href="#" className="text-white text-2xl  hover:bg-white  hover:text-blue-600 rounded-lg pr-[68%] pt-2 pb-2 pl-4 md:pr-[74%] xl:pr-[60%]">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Display;
