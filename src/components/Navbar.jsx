import React from "react";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import Display from "./Display";
import axios from "axios";
import apiUrl from "../apiUrl.js";

const Navbar = () => {
  const signout = async () => {
    try {
        await axios.post(apiUrl + 'auth/signout', null, header())
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.replace('/')
    } catch (error) {
        console.log(error);
    }
}

  let options = [
    { to: "/", title: "Home", role: 0 },
    { to: "/register", title: "Regiter", online:false },
    { to: "/singin ", title: "Sing In", online:false },
    { to: "/", title: "Sing Out",onClick: signout, online: true },
    { to: "/formNewMangas", title: "New Managa" },
    { to: "/AuthorForm ", title: "New Author", online: true, role: 0  },
    { to: "/ChapterForm ", title: "New Chapter",online: true, role: 1  },
  ];
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <Display options={options} show={show} setShow={setShow} />}
      <div className="flex-none order-1 flex-grow-0 w-54 h-32 flex w-full absolute z-10  ">
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
