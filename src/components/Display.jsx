import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { Link as Anchor } from "react-router-dom";

const Display = ({ options, show, setShow}) => {

  let user = JSON.parse(localStorage.getItem('user'));
  let email =  user?.email 
  let photo =  user?.photo 

  return (
    <>
      <nav className="bg-blue-600 fixed z-20 top-0 left-0 h-screen w-full  xl:w-[356px] flex flex-col  ">
        <div className="text-white flex justify-around mt-2 items-center ">
          <img src={photo} alt="" className="rounded-full h-10 w-10" />
          
          <div className="pr-[10%] md:pr-[50%] xl:pr-[2%]">
            
             <h2>{email}</h2>
  
          </div>
          <RiCloseFill
            className="w-10 h-10"
            onClick={() => setShow(!show)}
          />
        </div>
        {options?.map((each, index) => (
          <Anchor
            onClick={each.onClick}
            key={index}
            to={each.to}
            className="text-white text-2xl hover:bg-white  hover:text-blue-600 rounded-lg pr-[72%] pt-2 pb-2 pl-4 md:pr-[75%] xl:pr-[56%] mt-[3px]"
          >
            {each.title}
          </Anchor>
        ))}
      </nav>
    </>
  );
};
export default Display;
