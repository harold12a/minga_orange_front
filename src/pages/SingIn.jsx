import React from "react";
import { Link as Anchor } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import apiUrl from '../apiUrl.js'
import Swal from "sweetalert2";

const SingIn = () => {
  const login = async () => {
    let data = {
      email: email.current.value?.trim(),
      password: password.current.value?.trim(),
    }

    try {
      const response = await axios.post(apiUrl + "auth/singin", data).then(res => res.data);  
      console.log(response);
      if (response.success) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Welcome !!',
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.setItem('token', response.response.token);
        localStorage.setItem('user', JSON.stringify(response.response.user));
        setTimeout(() => window.location.replace("/"), 1000);
      } 
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: "sign in please!",
        html: error.response.data.messages
          .map((each) => `<p>${each}</p>`)
          .join(""),
      })
    }
  };


  const email = useRef();
  const password = useRef();

  return (
    <main className="flex w-full h-full items-center justify-between ">
      <img
        className="hidden md:block md:absolute md:top-0 md:left-0 h-screen w-[50%] object-cover "
        src="/assets/images/SingIn.png"
        alt="signin"
      />
      <div className="flex flex-col md:absolute md:top-0 md:left-[50%] justify-center items-center h-screen w-full md:w-[50%] ">
        <img
          src="/assets/images/Frame 34648.png"
          alt="frame"
          className="w-[160px]"
        />
        <p className="font-semibold text-[30px] text-center">
          Welcome <span className="text-[#4338CA]">back</span>!
        </p>
        <p className="font-semibold text-[12px] mb-[12px] text-center p-2">
          Discover manga and manwha, track your progress, have fun, read manga.
        </p>
        <form className="flex flex-col my-[2px]">
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            ref={email}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={password}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#4338CA] to-[#4338CA]"
            type="button"
            value="Sign in"
            onClick={login}
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
              src="/assets/images/Google.png"
              alt="google"
              className="absolute right-[310px] top-[24px] w-[22px] hidden lg:block"
            />
          </div>
        </form>
        <p className="font-semibold text-[12px] mt-[12px] text-center p-2">
          You don't have an account yet?{" "}
          <Anchor to="/register" className="text-[#4338CA]">
            Sign up
          </Anchor>
          !
        </p>
        <p className="font-semibold text-[12px] text-center p-2">
          Go back to{" "}
          <Anchor to="/" className="text-[#4338CA] hover:text-black">
            Home Page
          </Anchor>
          !
        </p>
      </div>
    </main>
  );
};

export default SingIn;
