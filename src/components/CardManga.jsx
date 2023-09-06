import React from "react";
import { Link as Anchor } from "react-router-dom";

const CardManga = ({ title, cover_photo, type, color, manda_id  }) => {
  return (
    <>
      <div className="group" >
        <div className="bg-white  rounded-[20px] mt-[30px] w-[85%] mx-[8%]  xl:ml-[0%] sm:ml-[20%] sm:w-[60%] xl:w-[100%]  flex justify-between  shadow-lg  transition-transform duration-300 transform group-hover:scale-105 group-focus:scale-105 ">
          <div>
          <h1 className="font-bold text-[18px] xl:text-[25px]  md:text-[29px] pl-[30px] pt-[20%]   ">
            {title}
          </h1>
          <h2 className=" font-bold pl-[30px] md:text-[25px] " style={{ color: `${color}` }}>
            {type}
          </h2>
          <Anchor to={'/manga/' + manda_id + '/1'} /* style={{ backgroundColor: `${hover}`, color: `${color}` }}*/ className=" hidden xl:block bg-green-200 blod text-green-700 pt-[10px] mt-[13%]  pl-[26px]  ml-[12%] mb-[2%]  w-[90px]  h-[45px] rounded-[50000px] text-[18px] ">
              Read
            </Anchor>
          </div>     
          <div className="">
            <img
              className=" w-[140px] xl:w-[300px]  md:w-[250px]  h-[140px]  md:h-[170px]  xl:h-[250px] rounded-l-[45%] object-cover rounded-r-[10%]  "
              src={cover_photo}
              // src={"/assets/images/card-naruto.png"}
              alt="img"
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CardManga;
