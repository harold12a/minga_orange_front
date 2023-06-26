import React from "react";
import { useState } from "react";
import {  RiMenuLine } from "react-icons/ri";
import Display from "./Display";


const Navbar = () => {

  const [show,setShow] = useState(false);

  let options = [
    { to:'/', title:'Home'},
    {to:'/register', title: 'Regiter'},
    {to:'/singin ',title: 'Sing In'},
    {to:'/AuthorForm ',title: 'New Author'},
    {to:'/ChapterForm ',title: 'New Chapter'}
  ]


  return (
    <>
    
    {show && <Display options={options} show={show} setShow={setShow} />  }
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
