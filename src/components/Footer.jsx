import React from "react";
import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTwitterFill,
  RiYoutubeFill,
  RiArrowRightLine,
  RiArrowLeftLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="  fixed bottom-0 inset-x-0 flex  items-center gap-x-4 mb-4 justify-center  xl:hidden  ">
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
        </footer>
        <footer className="bottom-0 mt-[390px] hidden xl:block overflow-x-hidden  ">
          <div className="h-48 mx-auto  bg-[#4338CA] w-[90%] mb-[30px] rounded-[5px] overflow-x-hidden relavite">
          <h1 className=" absolute text-white pl-[50%] pt-[3%]">Shonen:</h1>
            <p className="absolute text-white pr-[18%] pl-[50%] pt-[5%] mb-3">
              Is the manga that is aimed at adolescent boys. They are series
              with large amounts of action, in which humorous situations often
              occur. The camaraderie between members of a collective or a combat
              team stands out.
            </p>
       <img src="../../src/assets/images/29eba99.png" alt="" className="absolute top-[765px] left-[130px] h-64 w-64" />
       <img src="../../src/assets/images/image3.png" alt="" className="absolute top-[765px] left-[440px] h-[200px] w-[140px]"  />
            <button className="absolute bg-slate-300 rounded-[50px]  ml-[85%] mt-[6%]  ">
              <RiArrowRightLine />
            </button>
            <button className="absolute bg-slate-300 rounded-[50px] ml-[2.5%] mt-[6%]  ">
              <RiArrowLeftLine />
            </button>
         
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
