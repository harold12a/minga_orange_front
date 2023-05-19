import React from "react";
import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <>
      
        <footer >
          <div className="  fixed bottom-0 inset-x-0 flex  items-center gap-x-4 mb-4 justify-center  xl:hidden   ">
          <button className=" text-4xl  text-white">
            <RiInstagramLine />
          </button>
          <button className=" text-4xl  text-white">
            <RiFacebookCircleLine />
          </button>
          <button className=" text-4xl  text-white">
            <RiTwitterFill />
          </button>
          <button className=" text-4xl  text-white">
            <RiYoutubeFill />
          </button>
          </div> 
         
      
         
        </footer>
    </>
  );
};

export default Footer;
