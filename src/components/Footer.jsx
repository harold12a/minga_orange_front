import React from "react";
import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTwitterFill,
  RiYoutubeFill,
  RiFacebookBoxFill,
  RiHeartLine,
  RiVimeoFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-white mt-[80%]   xl:hidden  md:flex md:mr-[50%] "> 
          <img
            src="../../src/assets/images/Frame 34648.png"
            alt=""
            className=" mx-auto pb-[50px] "
          />
         <div className=" absolute pb-[7px]   inset-x-0 flex  items-center gap-x-4 md:flex md:ml-[50%]  justify-center  xl:hidden   ">
          <button className=" text-4xl  text-black">
            <RiInstagramLine />
          </button>
          <button className=" text-4xl  text-black">
            <RiFacebookCircleLine />
          </button>
          <button className=" text-4xl  text-black">
            <RiTwitterFill />
          </button>
          <button className=" text-4xl  text-black">
            <RiYoutubeFill />
          </button>
          </div>
        </div>
        <div className="bottom-0   hidden xl:block overflow-x-hidden    ">
          <img
            src="../../src/assets/images/Rectangle14.png"
            alt=""
            className="mx-auto w-[90%]"
            style={{ borderRadius: "0 0 140% 140%" }}
          />

          <div className=" h-[200px] mx-auto w-full  mb-[100px]    overflow-hidden ">
            <img
              src="../../src/assets/images/wave_white (1).svg"
              alt=""
              className="absolute mt-[-240px] "
            />
            <div className="flex  ">
              <a href="" className="mr-[1%] ml-[15%] mt-[8%] absolute">
                home
              </a>
              <a href="" className="ml-[20%] mt-[8%] absolute">
                mangas
              </a>
              <img
                src="../../src/assets/images/Frame 34648.png"
                alt=""
                className=" absolute mx-auto  left-[45%] mt-[7%]   "
              />

              <div className="flex ml-[75%] mt-[7%] absolute">
                <RiFacebookBoxFill className="flex w-[40px] " />
                <RiTwitterFill className="flex w-[40px] " />
                <RiVimeoFill className="flex w-[40px] " />
                <RiYoutubeFill className="flex w-[40px] " />
              </div>
              <button className=" flex text-white items-center ml-[73%] mt-[9%]   w-[15%] h-10 px-[80px] bg-[#5E52F3] rounded-[50px] absolute ">
                Donate <RiHeartLine />
              </button>
            </div>
            <hr className="border-b border-gray-400 my-4 w-[75%] mx-auto mt-[13%]   " />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
