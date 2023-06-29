import React from "react";
import profile1 from "../assets/images/profile.png";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";

const AuthorForm = () => {

  const navigate = useNavigate()

  const Send = ()=>{
    setTimeout(()=>navigate('/Register'),2000)

    let proof = {
      name: name.current.value,
      lastname: lastname.current.value,
      data: data.current.value,
      date:date.current.value,
      urlrofile: urlrofile.current.value,
     }
     console.log(proof);
  }

  const name = useRef()
  const lastname = useRef()
  const data = useRef()
  const date = useRef()
  const urlrofile = useRef()

  return (
    <main className="flex w-full min-h-screen items-center justify-between">
      <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
      <img src="../../src/assets/images/Logo(1) 3.png" alt="frame" className="w-[60px] absolute top-5 right-5 xl:hidden" />
        
      <h1>New Author</h1>
                <img src={profile1} alt="" />
        <form className="flex flex-col my-[2px]">
          <input
            className="w-[260px] md:w-[300px] lg:w-[260px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            type="text"
            name="title"
            id="Name"
            placeholder="Name"
            ref={name}
          />

          <input
            className="w-[260px] md:w-[300px] lg:w-[260px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            type="text"
            name="title"
            id="Last Name"
            placeholder="Last Name"
            ref={lastname}
            
          />
          
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            type="text"
            name="city"
            id="city"
            placeholder="City,Country"
            ref={data}
          />
          
          <input
            type="date"
            value=""
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            ref={date}
          />
          
          <input
            type="text"
            placeholder="url profile image"
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            ref={urlrofile}
          />
          
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#4338CA] to-[#4338CA]"
            type="button"
            value="Send"
            onClick={Send}
          />

        </form>
        <p className="font-semibold text-[12px] mt-[12px] text-center p-2">
          Already have an account?{" "}
          <Anchor to='/singin' className="text-[#4338CA]">Log in</Anchor>!
        </p>
        <p className="font-semibold text-[12px] text-center p-2">
          Go back to{" "}
          <Anchor
            to='/'
            className="text-[#4338CA] hover:text-black"
          >
            Home
          </Anchor>
          !
        </p>
      </div>
      <img
        className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover"
        src="../../src/assets/images/authorprofile.png"
        alt="authorprofile"
      />
    </main>
  );
};

export default AuthorForm;