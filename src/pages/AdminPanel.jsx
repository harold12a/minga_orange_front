import { useRef } from "react";
import React from 'react'
import { useNavigate } from "react-router-dom";
import apiUrl from "../apiUrl";
import axios from "axios";
import Swal from "sweetalert2";
import header from "../header";


export default function Author() {
  const navigate = useNavigate();

  const name = useRef();
  const lastname = useRef();
  const city_country = useRef();
  const date = useRef();
  const photo = useRef();

  const Save = async () => {
    const [city, country] = city_country.current.value.split(",");

    let data = {
      name: name.current.value?.trim(),
      lastname: lastname.current.value?.trim(),
      city: city,
      country: country,
      date: date.current.value?.trim(),
      photo: photo.current.value?.trim(),
    };

    try {
    await  axios.post(apiUrl + "/authors", data, header());
      Swal.fire({
         icon: "success"
         });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: '¡New Author!',
        html: error.response.data.messages.map(each=>`<p>${each}</p>`).join(''),
    
      });
      
    }
 
  };
  return (
  <div className="text-center text-[#FFFFFF] font-Roboto not-italic flex-none order-none flex-grow-0 items-center ">
   <div className=" bg-no-repeat bg-cover  absolute lg:bg-[10%] h-screen w-full lg:h-[62%] xl:bg-[url('.../../src/assets/images/AdminPanel.png')]"> 
    <h1 className="bg-cover-repeat absolute h-screen w-full lg:h-[62%] xl:bg-mt-[220px] font-bold md:top-[120px] xl:text-[65px] hidden lg:block ">
      Panel
    </h1>
    <div className=" bg-white flex flex-col rounded-t-lg  xl:absolute xl:right-[2%] xl:top-[85%] items-center w-full lg:w-[96%] sm:w-[96%]   ">
        
<h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-black">Choose technology:</h3>
       
    <div>
    
<div className="sm:hidden">
    <label for="tabs" className="sr-only">Select your country</label>
    <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>Companies</option>
        <option>Authors</option>
        <option>France</option>
        <option>Germany</option>
    </select>
</div>
<ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
    <li className="w-full">
        <a href="#" class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Companies</a>
    </li>
    <li className="w-full">
        <a href="#" className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Authors</a>
    </li>
</ul>

    </div>     
      </div>
    </div>
    </div>
    
    
    
  )
}

