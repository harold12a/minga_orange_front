import React from 'react';
import { useState } from "react";
import AdminTabs from "../components/AdminTabs";
import AuthorTabs from "../components/AuthorTabs";
import { useSelector } from "react-redux";



export default function AdminPanel() {
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState(true);

  return (
  <div className="text-center text-[#FFFFFF] font-Roboto not-italic flex-none order-none flex-grow-0 items-center ">
   <div className=" bg-no-repeat bg-cover  absolute lg:bg-[10%] h-screen w-full lg:h-[62%] xl:bg-[url('.../../src/assets/images/AdminPanel.png')]"> 
    <h1 className="bg-cover-repeat absolute h-screen w-full lg:h-[62%] xl:bg-mt-[220px] font-bold md:top-[120px] xl:text-[65px] hidden lg:block ">
      Panel
    </h1>
    <div className=" bg-white flex flex-col rounded-t-lg  xl:absolute xl:right-[2%] xl:top-[85%] items-center w-full lg:w-[96%] sm:w-[96%]   ">
        
<h3 className="mb-5 text-lg font-medium text-[#4338CA] mt-[32px] underline decoration-purple-900/underline decoration-8">Entities</h3>
       
    
      <div className="w-52 flex items-center cursor-pointer border-solid border-2 h-[40px] w-[607px] bg-white border border-gray-400">
        <input
          type="button"
          value="Companies"
          onClick={() => {
            setShow(!show), setTitle(!title);
          }}
          className={`flex items-center justify-center w-1/2 h-full border-solid border-2 text-[#9D9D9D] ${
            title ? "bg-[#4338CA] text-white" : "bg-[#EBEBEB] text-[#9D9D9D]"
          }`}
        />
        <input
          type="button"
          value="Authors"
          onClick={() => {
            setShow(!show), setTitle(!title);
          }}
          className={`flex items-center justify-center w-1/2 h-full border-solid border-2  text-[#9D9D9D] ${
            !title ? "bg-[#4338CA]  text-white" : "bg-[#EBEBEB] text-[#9D9D9D]"
          }`}
        />
      </div>

      {show ? <AuthorTabs /> : <AdminTabs />}
    </div>
  
    </div>
    </div>
      )
    }