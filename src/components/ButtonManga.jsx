import React, {useState} from "react";
import { Link as Anchor } from "react-router-dom";

const ButtonManga = () => {

  const [category, setCategory] = useState([])

  

  const ButtonClick = () => {
    setCategory(category);
    console.log('clk me');

  };

  return (
    <div className=" flex justify-center xl:justify-start xl:ml-[12%]">
      <Anchor className=" hidden xl:block bg-gray-400 text-gray-800  pt-[7px] md:pt-[10px]  pl-[15px] md:pl-[40px] mx-[2%] mt-[15%] xl:mt-[5%]  w-[70px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]" onClick={ButtonClick}>
        all
      </Anchor>
      <Anchor className=" bg-red-200 text-red-500 pt-[7px] md:pt-[10px]  pl-[15px] md:pl-[26px] mx-[2%] xl:mx-[-1%] mt-[5%] xl:mt-[5%] w-[70px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]" onClick={ButtonClick}  >
        Shonen
      </Anchor>
      <Anchor className=" bg-orange-200 text-orange-500 pt-[7px] md:pt-[10px] pl-[13px] md:pl-[26px] mx-[2%]  mt-[5%] xl:mt-[5%]  w-[60px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]"onClick={ButtonClick}>
        Seinen
      </Anchor>
      <Anchor className=" bg-green-200 text-green-500 pt-[7px] md:pt-[10px]  pl-[15px] md:pl-[26px] mx-[2%] xl:mx-[-1%] mt-[5%] xl:mt-[5%] w-[60px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]"onClick={ButtonClick}>
        Shojo
      </Anchor>
      <Anchor className=" bg-purple-200 text-purple-500 pt-[7px] md:pt-[10px] pl-[15px] md:pl-[26px] mx-[2%]  mt-[5%] xl:mt-[5%]  w-[70px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]"onClick={ButtonClick}>
        kodomo
      </Anchor>
    </div>
  );
};

export default ButtonManga;
