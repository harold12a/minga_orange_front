import React from "react";
import { useState, useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";
import Display from "./Display";
import axios from "axios";
import apiUrl from "../apiUrl.js";
import header from "../header.js";
import Swal from "sweetalert2";

const Navbar = () => {
  const signout = async () => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure ?',
        text: '¿Do you want to log out?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'yes',
        cancelButtonText: 'Cancel',
        didOpen: () => {
          const confirmButton = document.querySelector('.swal2-confirm');
          confirmButton.style.backgroundColor = '#2573F0'; 
          confirmButton.style.color = 'white'; 
        },
      });

    if(result.isConfirmed){
    
      await axios.post(apiUrl + "auth/signout", null, header());
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.replace("/");
    }
  } catch (error) {
      console.log(error);
    }
  
  };
  const [options, setOptions] = useState([
    { to: "/", title: "Home" },
    { to: "/register", title: "Regiter" },
    { to: "/singin ", title: "Sing In" },
  ]);

  useEffect(() => {

  let user = JSON.parse(localStorage.getItem("user"))
  

  if (user?.role === 0) {
    setOptions([
      { to: "/", title: "Home" },
      {to: "/mangas/1", title: "Mangas"},
      { to: "/me ", title: "New Author" },
      { to: "/", title: "Sing Out", onClick: signout },
    ])
  } else if (user?.role === 1 || user?.role === 2) {
    setOptions([
      { to: "/", title: "Home" },
      {to: "/mangas/1", title: "Mangas"},
      { to: "/manga-form", title: "New Manga" },
      { to: "/:manga_id/chapter-form ", title: "New Chapter" },
      { to: '/me', title: "Profile" },
      { to: '/details-chapter/:id/:page', title: "Chapters"},
      { to: "/", title: "Sing Out", onClick: signout },
    ]);
  } 
  else if (user?.role === 3) {

    setOptions([
      { to: "/", title: "Home" },
      {to: "/mangas/1", title: "Mangas"},
      { to: "/", title: "Sing Out", onClick: signout },
    ]);
  } else {
    setOptions([
      { to: "/", title: "Home" },
      { to: "/register", title: "Regiter" },
      { to: "/singin ", title: "Sing In" },
    ]);
  }

}, []); 
  

  const [show, setShow] = useState(false);
  return (
    <>
      {show && <Display options={options} show={show} setShow={setShow} />}
      <div className="flex-none order-1 flex-grow-0 w-54 h-32 flex w-full absolute z-10">
        <div className="w-full absolute flex justify-between items-center p-2 xl:p-[25px] ">
          <RiMenuLine
            onClick={() => setShow(!show)}
            className="w-8 h-8 fill-current text-indigo-700 xl:text-black  "
          />
          <img
            src="../../src/assets/images/Logo(1) 3.png"
            alt=""
            className=" top-5  xl:pr-2 "
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
