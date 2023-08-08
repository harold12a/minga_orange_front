import React from 'react'
import { Link as Anchor } from "react-router-dom";
import { RiCompass4Line, RiAddCircleLine } from "react-icons/ri";

const EditMangas = ({ title, cover_photo, type, color  }) => {
    return (
        <>
          <div className="group" >
            <div className="bg-white  rounded-[20px] mt-[30px] w-[85%] mx-[8%]  xl:ml-[0%] sm:ml-[20%] sm:w-[60%] xl:w-[100%]  flex justify-between  shadow-lg  transition-transform duration-300 transform group-hover:scale-105 group-focus:scale-105 ">
              <div className='absolute flex mt-2 pl-4 ' >
              <RiAddCircleLine className='mr-2' />
              <RiCompass4Line/>
          
              </div>
              <div>
              <h1 className="font-bold text-[17px] xl:text-[25px] mt-2 md:text-[20px] pl-[30px] pt-[20%]   ">
                {title} 
              </h1>
              <h2 className=" font-bold pl-[30px] md:text-[20px] " style={{ color: `${color}` }}>
                {type}
              </h2>
              <div className='absolute mt-2 pl-6 xl:mt-[13%]' >
                <Anchor  className='mr-2'>
                  Edit
                </Anchor>
                <Anchor>
                  Delete
                </Anchor>
              </div>
              </div>     
              <div className="">
                <img
                  className=" w-[140px] xl:w-[300px]  md:w-[240px]  h-[140px]  md:h-[170px]  xl:h-[250px] rounded-l-[49%] object-cover rounded-r-[10%]  "
                  src={cover_photo}
                  // src={"../../src/assets/images/card-naruto.png"}
                  alt="img"
                />
              </div>
            </div>
            
          </div>
        </>
      );
}

export default EditMangas