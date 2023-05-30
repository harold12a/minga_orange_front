import React from 'react'
import {
    RiArrowRightLine,
    RiArrowLeftLine,
  } from "react-icons/ri";
 
const Carousel = ({character_photo, cover_photo, name, description} ) => {
  return (
    <div className="bottom-0  mt-[390px] hidden xl:block overflow-x-hidden">
    <div className="h-[200px] mx-auto w-[90%]  bg-[#4338CA] mb-[30px] rounded-[5px] relavite">
      <h1 className=" absolute text-white pl-[50%] pt-[3%]">{name}</h1>
      <p className="absolute text-white pr-[18%] pl-[50%] pt-[5%] mb-3">
      {description}
      </p>
      <img
        src={character_photo}
        alt=""
        className="absolute top-[765px] left-[130px] h-64 w-64"
      />

      <img
        src={cover_photo}
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
  </div>
  )
}

export default Carousel