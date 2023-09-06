import { useRef } from "react";
import React from 'react'
import { useNavigate } from "react-router-dom";
import profile1 from "/assets/images/pro.png";
import apiUrl from "../apiUrl";
import axios from "axios";
import Swal from "sweetalert2";
import header from "../header";
import ButtonSave from "../components/ButtonSave";
import ButtonDelete from "../components/ButtonDelete";

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
   <div className=" bg-no-repeat bg-cover  absolute lg:bg-[10%] h-screen w-full lg:h-[62%] xl:bg-[url('./assets/images/authorprofile.png')]"> 
    <h1 className="bg-cover-repeat absolute h-screen w-full lg:h-[62%] xl:bg-mt-[220px] font-bold md:top-[120px] xl:text-[65px] hidden lg:block ">
      Profile
    </h1>
    <div className=" bg-white flex flex-col rounded-t-lg  xl:absolute xl:right-[2%] xl:top-[85%] items-center w-full lg:w-[96%] sm:w-[96%]   ">
        <img className="w-5/5 lg:w-48   flex flex-col rounded-t-lg xl:absolute xl:right-[170px]  xl:top-[12px]  sm:w-[98px] my-2 mx-auto mt-[95px] xl:mr-[200px] " 
        src={profile1} alt="img-profile" />
        <h1 className="text-[black] lg:w-48 flex flex-col rounded-t-lg xl:absolute xl:right-[160px] xl:mr-[200px] xl:top-[262px] sm:mt-[20px]">New Author</h1>
        <h2 className="text-[black] lg:w-48 flex flex-col rounded-t-lg xl:absolute xl:right-[160px] xl:mr-[200px] xl:top-[302px]">Caseros, Buenos Aires</h2>
        <h3 className="text-[black] lg:w-48 flex flex-col rounded-t-lg xl:absolute xl:right-[160px] xl:mr-[200px] xl:top-[326px]">16/02/2000</h3>
        
       
    <div>
    <form className="flex flex-col my-[10%] mt-[140px] xl:mr-[200px] ">
          <input
            ref={name}
            className="w-5/5 hidden:w-437px rounded-ly border-b-2 border-[#1F1F1F] rounded-t-lg xl:relative xl:left-[-122%] xl:top-[28px] sm:w-[102%]"
            type="text"
            placeholder="Name"
            id="name"
            required
          />
          <input
            ref={lastname}
            className="w-5/5 w-437px rounded-ly border-b-2 border-[#1F1F1F] rounded-t-lg xl:relative md:left-[-122%] md:top-[38px] sm:w-[102%]"
            type="text"
            placeholder="Last name"
            id="last_name"
          />
          <input
            ref={city_country}
            className="w-5/5 w-437px rounded-ly border-b-2 border-[#1F1F1F] rounded-t-lg xl:relative md:left-[-122%] md:top-[48px] sm:w-[102%]"
            type="text"
            placeholder="City, Country"
            id="city_country"
            required
          />
          <input
            ref={date}
            className="w-5/5 w-437px rounded-ly border-b-2 border-[#1F1F1F] text-black rounded-t-lg xl:relative md:left-[-122%] md:top-[60px] sm:w-[102%] lg:h-[102%]"
            type="date"
            id="date"
          />
          <input
            ref={photo}
            className="w-5/5 w-437px rounded-ly border-b-2 border-[#1F1F1F] rounded-t-lg xl:relative md:left-[-122%] md:top-[74px] sm:w-[102%]"
            type="url"
            placeholder="URL Profile Image"
            id="photo"
            required
          />
          <ButtonSave onClick={Save} />
          <ButtonDelete onClick={Save}/>  //Falta construir funcion Delete
        </form>
    </div>     
      </div>
    </div>
    </div>
    
    
    
  )
}
