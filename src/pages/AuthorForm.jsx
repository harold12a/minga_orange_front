import { useRef } from "react";
import {useNavigate } from "react-router-dom";
import profile1 from "../assets/images/profile.png";
import apiUrl from "../apiUrl";
import axios from "axios"
import ButtonSend from "../components/ButtonSend";
import Swal from "sweetalert2";

export default function AuthorForm(){

    const navigate = useNavigate()
  
    const Send = ()=>{
      const [city, country] = city_country.current.value.split(",")
  
      let proof = {
        name: name.current.value,
        lastname: lastname.current.value,
        city: city,
        country:country,
        date: date.current.value,
        urlrofile: urlrofile.current.value
       }
       let headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` } }
        console.log(proof)
        axios.post(apiUrl + "/authors", proof, headers).then(() => {
            Swal.fire({ "icon": "success" })
            navigate('/')
        }
        ).catch(error => {
            if (error.response.proof?.messages) {
                Swal.fire({
                    "icon": "error",
                    "html": error.response.proof.messages.map(each => `<p>${each}</p>`).join("")
                })
            } else {
                Swal.fire({
                    "icon": "error",
                    "html": `<p>${error.response.proof}</p>`
                })
            }
        
        }
        )
  
    }
    const name = useRef()
    const lastname = useRef()
    const city_country = useRef()
    const date = useRef()
    const urlrofile = useRef()
  
    return (
      <main className="flex w-full min-h-screen items-center justify-between">
        <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
        <img src="../../src/assets/images/Logo(1) 3.png" alt="frame" className="w-[60px] absolute top-5 right-5 xl:hidden" />
          
        <h1>New Author</h1>
                  <img src={profile1} alt="" />
          <form className="flex flex-col my-[2px]">
             <input ref={name} className='w-[260px] md:w-[300px] lg:w-[260px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]' type="text" placeholder="Name" id="name" required />
              <input ref={lastname} className='w-[260px] md:w-[300px] lg:w-[260px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]' type="text" placeholder="Last name" id="last_name" />
              <input ref={city_country} className='w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]' type="text" placeholder="City, Country" id="city_country" required />
              <input ref={date} className='w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]' type="date" id="date" />
              <input ref={urlrofile} className='w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]' type="url" placeholder="URL Profile Image" id="photo" required />
              <ButtonSend onClick={Send} />
          </form>
  
  
        </div>
        <img
          className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover"
          src="../../src/assets/images/authorprofile.png"
          alt="authorprofile"
        />
      </main>
    );
};