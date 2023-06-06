import React from "react";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import Display from "./Display";

const Navbar = () => {
  let options = [
    { tittle: "home" },
    { tittle: "regiter" },
    { tittle: "Sing in" },
  ];
  const [show,setShow] = useState(false);

  return (
    <>
    
    {show && <Display show={show} setShow={setShow} />}
      <div className="flex-none order-1 flex-grow-0 w-54 h-32 relative">
        <div className="w-full absolute flex justify-between items-center p-2">
          <RiMenuLine
            onClick={() => setShow(!show)}
            className="w-8 h-8 fill-current text-indigo-700 xl:text-white "
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
