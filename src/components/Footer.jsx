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
          <div className="bottom-0   hidden xl:block overflow-x-hidden    ">
         
          {/* <img src="../../src/assets/images/Rectangle14.png" alt="" className=" rounded-b-[50%]    mx-auto w-full  " />
           */}
          <img src="../../src/assets/images/Rectangle14.png" alt="" className="mx-auto w-full" style={{  borderRadius: '0 0 140% 140%' }} />


          {/* <div className=" h-[200px] mx-auto w-full  bg-[#4338CA] mb-[30px] rounded-[5px]  "> */}
          <div className=" h-[200px] mx-auto w-full  mb-[30px]    overflow-hidden "> 
        
           </div>
        </div>        
        </footer>
    </>
  );
};

export default Footer;
