import React from "react";
import { Link as Anchor } from "react-router-dom";

const CardManga = ({ title, cover_photo }) => {
  return (
    <>
      <div className="" >
        <div className="bg-white  rounded-[20px] mt-[30px] w-[85%] mx-[8%]  xl:ml-[0%] sm:ml-[20%] sm:w-[60%] xl:w-[100%]  flex justify-between  shadow-lg ">
          <div>
          <h1 className="font-bold text-[18px] md:text-[29px] pl-[30px] pt-[20%] ">
            {title}
          </h1>
          <h2 className="text-orange-400 font-bold pl-[30px] md:text-[25px] ">
            Type
          </h2>
          <Anchor className=" hidden xl:block bg-green-200 blod text-green-700 pt-[10px] mt-[13%]  pl-[26px]  ml-[12%] mb-[2%]  w-[90px]  h-[45px] rounded-[50000px] text-[18px] ">
              Read
            </Anchor>
          </div>     
          <div className=" flex justify-end   ">
            <img
              className=" w-[45%] xl:w-[30%] rounded-l-[50%] object-cover rounded-r-[10%] "
              src={cover_photo}
              // src={"../../src/assets/images/card-naruto.png"}
              alt="img-naruto"
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CardManga;
