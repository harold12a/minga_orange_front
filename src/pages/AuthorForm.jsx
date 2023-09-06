import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import profile1 from "/assets/images/Profile.png";
import apiUrl from "../apiUrl";
import axios from "axios";
import ButtonSend from "../components/ButtonSend";
import Swal from "sweetalert2";
import header from "../header";

export default function AuthorForm() {
  const navigate = useNavigate();

  const name = useRef();
  const lastname = useRef();
  const city_country = useRef();
  const date = useRef();
  const urlrofile = useRef();
  const photo = useRef();

  const Send = async () => {
    const [city, country] = city_country.current.value.split(",");

    let data = {
      name: name.current.value?.trim(),
      lastname: lastname.current.value?.trim(),
      city: city,
      country: country,
      date: date.current.value?.trim(),
      urlrofile: urlrofile.current.value?.trim(),
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
        text: 'Error Creating Author',
        html: error.response.data.messages.map(each=>`<p>${each}</p>`).join(''),
    
      });
      
    }
 
  };



  return (
    <main className="flex w-full min-h-screen items-center justify-between">
      <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
        <img
          src="/assets/images/Logo(1) 3.png"
          alt="frame"
          className="w-[60px] absolute top-5 right-5 xl:hidden md:hidden"
        />

        <h1>New Author</h1>
        <img src={profile1} alt="" />
        <form className="flex flex-col my-[2px]">
          <input
            ref={name}
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            type="text"
            placeholder="Name"
            id="name"
            required
          />
          <input
            ref={lastname}
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            type="text"
            placeholder="Last name"
            id="last_name"
          />
          <input
            ref={city_country}
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            type="text"
            placeholder="City, Country"
            id="city_country"
            required
          />
          <input
            ref={date}
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            type="date"
            id="date"
          />
          <input
            ref={urlrofile}
            // ref={photo}
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            type="url"
            placeholder="URL Profile Image"
            id="photo"
            required
          />
          <ButtonSend onClick={Send} />
        </form>
      </div>
      <img
        className="   hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover"
        src="/assets/images/authorprofile.png"
        alt="authorprofile"
      />
    </main>
  );
}
