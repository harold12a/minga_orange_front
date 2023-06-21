import React from "react";
import profile1 from "../assets/images/profile.png";
import { Link as Anchor } from "react-router-dom";

const AuthorForm = () => {
  return (
    <main className="flex w-full min-h-screen items-center justify-between">
      <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
      <img src="../../src/assets/images/Logo(1) 3.png" alt="frame" className="w-[60px] absolute top-5 right-5" />
        
      <h1>New Author</h1>
                <img src={profile1} alt="" />
        <form className="flex flex-col my-[2px]">
          <input
            className="w-[260px] md:w-[300px] lg:w-[260px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            type="text"
            name="title"
            id="Name"
            placeholder="Name"
          />

          <input
            className="w-[260px] md:w-[300px] lg:w-[260px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            type="text"
            name="title"
            id="Last Name"
            placeholder="Last Name"
          />
          
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
            type="text"
            name="city"
            id="city"
            placeholder="City,Country"
          />
          
          <input
            type="date"
            value=""
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
          />
          
          <input
            type="text"
            placeholder="url profile image"
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-ly border-b-2 border-[#1F1F1F]"
          />
          
          <Anchor  to={"/register"} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-center text-white rounded-lg bg-gradient-to-r from-[#4338CA] to-[#4338CA]">
            Send
          </Anchor>

        </form>
        
      </div>
      <img
        className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover"
        src="../../src/assets/images/register.png"
        alt="register"
      />
    </main>
  );
};

export default AuthorForm;