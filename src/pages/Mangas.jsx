import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Link as Anchor } from 'react-router-dom'

const Mangas = () => {
  return (
    <>
      <main className="  bg-[url('../../src/assets/images/pexels-lisa.jpg')] bg-cover   absolute   lg:h-[70%]   bg-center mt-[-18%] xl:mt-[0%]   h-[50%] w-full  xl:w-[100%]    ">
        <h1 className="text-white text-3xl xl:text-[65px] absolute mt-[40%] ml-[33%] xl:ml-[43%] md:mt-[35%] xl:mt-[13%] md:ml-[45%]">
          Mangas
        </h1>
        <div>
          <input
            className="flex justify-center xl:bg-gray-200  border-gray-100 bg-white pl-[60px] mx-auto mt-[60%] md:mt-[42%] xl:mt-[24%] w-[320px] xl:w-[1100px] h-[60px] rounded-[50000px] xl:rounded-lg text-[20px] xl:text-[30px]"
            type="text"
            name="insertManga"
            id="insertManga"
            placeholder="Find your manga here"
          />
          <RiSearch2Line className="w-6 xl:w-10 h-6 mt-[-42px] ml-[15%] md:ml-[33%] xl:ml-[22%] text-indigo-700 xl:text-gray-500" />
        </div>
     
          <div className=" h-screen  bg-[#EBEBEB] rounded-t-[70px] xl:rounded-t-[20px] mt-[80px] xl:w-[95%] xl:ml-[2.5%]">
            <div className=" flex justify-center xl:justify-start xl:ml-[12%] " >
            <Anchor className=" hidden xl:block bg-gray-400 text-gray-800 pt-[7px] md:pt-[10px]  pl-[15px] md:pl-[40px] mx-[2%] mt-[15%] xl:mt-[5%]  w-[70px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]">
            all
          </Anchor>
            <Anchor className=" bg-red-200 text-red-500 pt-[7px] md:pt-[10px]  pl-[15px] md:pl-[26px] mx-[2%] xl:mx-[-1%] mt-[15%] xl:mt-[5%] w-[70px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]">
            Shonen
          </Anchor>
            <Anchor className=" bg-orange-200 text-orange-500 pt-[7px] md:pt-[10px] pl-[13px] md:pl-[26px] mx-[2%]  mt-[15%] xl:mt-[5%]  w-[60px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]">
            Seinen
          </Anchor>
            <Anchor className=" bg-green-200 text-green-500 pt-[7px] md:pt-[10px]  pl-[15px] md:pl-[26px] mx-[2%] xl:mx-[-1%] mt-[15%] xl:mt-[5%] w-[60px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]">
          Shojo
          </Anchor>
            <Anchor className=" bg-purple-200 text-purple-500 pt-[7px] md:pt-[10px] pl-[15px] md:pl-[26px] mx-[2%]  mt-[15%] xl:mt-[5%]  w-[70px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]">
            kodomo
            </Anchor>
            
            </div>

            <div className="bg-white rounded-[20px] mt-[30px] h-[25%] w-[90%] mx-[5%]  xl:ml-[12%] xl:w-[35%]  " >
              <h1 className="font-bold grid grid-cols-3 gap-2 text-[18px] md:text-[29px] pl-[30px] pt-8 " >
                Naruto:And That´s Why Yout´re Disqualified!!#8
              </h1>
              <h2 className="text-orange-400 font-bold pl-[30px] md:text-[25px]" >
                Type
              </h2>
              <img className="  mt-[-47%] sm:mt-[-35%] xl:mt-[-38%] h-[100%] w-[50%] ml-[50%] object-cover rounded-l-[50%] rounded-r-[10%] " src="../../src/assets/images/card-naruto.png" alt="img-naruto" />

            </div>
        
         

          </div>
      
      </main>
    </>
  );
};

export default Mangas;
