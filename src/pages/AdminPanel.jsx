import { useRef } from "react";
import React from 'react'
import { useNavigate } from "react-router-dom";
import apiUrl from "../apiUrl";
import axios from "axios";
import Swal from "sweetalert2";
import header from "../header";
import AdminTabs from "../components/AdminTabs";
import Perfil from "../assets/images/Rectangle 10.svg"

export default function AdminPanel() {
  
  return (
  <div className="text-center text-[#FFFFFF] font-Roboto not-italic flex-none order-none flex-grow-0 items-center ">
   <div className=" bg-no-repeat bg-cover  absolute lg:bg-[10%] h-screen w-full lg:h-[62%] xl:bg-[url('.../../src/assets/images/AdminPanel.png')]"> 
    <h1 className="bg-cover-repeat absolute h-screen w-full lg:h-[62%] xl:bg-mt-[220px] font-bold md:top-[120px] xl:text-[65px] hidden lg:block ">
      Panel
    </h1>
    <div className=" bg-white flex flex-col rounded-t-lg  xl:absolute xl:right-[2%] xl:top-[85%] items-center w-full lg:w-[96%] sm:w-[96%]   ">
        
<h3 className="mb-5 text-lg font-medium text-[#4338CA] mt-[32px] underline decoration-purple-900/underline decoration-8">Entities</h3>
       
    <div>
        
 {/* // tabls */}
 
      </div>

      <AdminTabs/>
    </div>
    </div>
    </div>
      )
    }