import React from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Resgister = () => {
  const navigate = useNavigate()

  const singup = ()=>{

    setTimeout(()=>navigate('/singin'),2000)

    let data = {
      email: email.current.value,
      password: password.current.value,
      photo: photo.current.value
     }
     console.log(data);
  }

  const email = useRef()
  const password = useRef()
  const photo = useRef()

  return (
    <main className="flex w-full min-h-screen items-center justify-between">
      <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
      <img src="../../src/assets/images/Frame 34648.png" alt="frame" className="w-[160px]" />
        <p className="font-semibold text-[32px] text-center">Welcome!</p>
        <p className="font-semibold text-[12px] mb-[12px] text-center p-2">
          Discover manga and comics, track your progress, have fun, read manga.
        </p>
        <form className="flex flex-col my-[2px]">
          <input
            className="w-[260px] md:w-[300px] lg:w-[260px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            ref={email}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="text"
            name="photo"
            id="Photo"
            placeholder="Photo"
            ref={photo}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={password}
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="myCheckbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
            />
            <label id="myCheckbox" className="ml-2 text-gray-700">
              Send notificacion to my email
            </label>
          </div>
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#4338CA] to-[#4338CA]"
            type="button"
            value="Sign up"
            onClick={singup}
          />
          <div className="relative">
            <input
              className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[18px] text-center rounded-lg border-2 border-[#1F1F1F]"
              type="password"
              name="password"
              id="password"
              placeholder="Sign in with Google"
            />
            <img
              src="../../src/assets/images/Google.png"
              alt="google"
              className="absolute right-[310px] top-[24px] w-[22px] hidden lg:block"
            />
          </div>
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
        src="../../src/assets/images/register.png"
        alt="register"
      />
    </main>
  );
};

export default Resgister;
