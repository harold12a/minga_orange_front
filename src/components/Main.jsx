import React from "react";
import {
  RiArrowRightLine,
  RiArrowLeftLine,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiVimeoFill,
  RiHeartLine,
} from "react-icons/ri";

const Main = () => {
  return (
    <>
      <div>
        <div className="text-center text-[#FFFFFF] font-Roboto not-italic flex-none order-none flex-grow-0 items-center ">
          <h1 className=" mt-[200px] font-bold text-[40px] leading-47 w-388 h-94 xl:mt-[90px]  ">
            Your favorite comic book store
          </h1>
          <p className=" sm: mt-2 pl-2 font-normal w-400px text-[16px] leading-19px block xl:hidden ">
            From classics to novelties, we have everything you need to immerse
            yourself in your favorite universes. Explore our catalog and live
            the adventure of your life.
          </p>
          <p className="hidden xl:block">
            Explore our catalog to live the adventure of
          </p>
          <p className="hidden xl:block"> your life</p>
          <button className="mt-7 mx-auto w-72 xl:w-363 h-14 xl:h-68 bg-[#4338CA] rounded-[50000px] block xl:hidden">
            Started
          </button>
          <button className="mt-7 mx-auto w-72 xl:w-363 h-14 xl:h-68 bg-[#4338CA] rounded-[50000px] hidden xl:block">
            Let´s go!
          </button>
        </div>
        <div className="bottom-0  mt-[390px] hidden xl:block overflow-x-hidden">
          <div className="h-[200px] mx-auto w-[90%]  bg-[#4338CA] mb-[30px] rounded-[5px] relavite">
            <h1 className=" absolute text-white pl-[50%] pt-[3%]">Shonen:</h1>
            <p className="absolute text-white pr-[18%] pl-[50%] pt-[5%] mb-3">
              Is the manga that is aimed at adolescent boys. They are series
              with large amounts of action, in which humorous situations often
              occur. The camaraderie between members of a collective or a combat
              team stands out.
            </p>
            <img
              src="../../src/assets/images/29eba99.png"
              alt=""
              className="absolute top-[765px] left-[130px] h-64 w-64"
            />
            <img
              src="../../src/assets/images/image3.png"
              alt=""
              className="absolute top-[765px] left-[440px] h-[200px] w-[140px]"
            />
            <button className="absolute bg-slate-300 rounded-[50px]  ml-[85%] mt-[6%]  ">
              <RiArrowRightLine />
            </button>
            <button className="absolute bg-slate-300 rounded-[50px] ml-[2.5%] mt-[6%]  ">
              <RiArrowLeftLine />
            </button>
          </div>
          {/* <div className="flex  ">
            <a href="" className="mr-[1%] ml-[15%] mt-[30%] absolute" >home</a>
            <a href="" className="ml-[20%] mt-[30%] absolute">mangas</a>
            <img
              src="../../src/assets/images/Frame 34648.png"
              alt=""
              className=" absolute mx-auto  left-[45%] mt-[30%]   "
            />
            
            <div className="flex ml-[75%] mt-[30%] absolute">
              <RiFacebookBoxFill className="flex w-[40px] " />
              <RiTwitterFill className="flex w-[40px] "/>
              <RiVimeoFill className="flex w-[40px] "/>
              <RiYoutubeFill className="flex w-[40px] "/>
            </div>
            <button className=" flex text-white items-center ml-[73%] mt-[32%] w-[15%] h-10 px-[80px] bg-[#5E52F3] rounded-[50px] absolute ">
              Donate <RiHeartLine/>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Main;
