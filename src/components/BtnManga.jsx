import React from 'react'
<<<<<<< HEAD

=======
import { Link as Anchor } from "react-router-dom";
>>>>>>> 0a9cfaab6c7cceeba819604f3a78f4b50d57253e

const BtnManga = ({ name, color, hover, value, action }) => {
  return (
   

    <input style={{ backgroundColor: `${hover}`, color: `${color}` }} onClick={action} value={name} id={value} type="button" 
     className="  bg-orange-200 text-orange-500 text-justify   pl-[14px] md:pl-[26px] mx-[2%] xl:mx-[1.5%] mt-[10%] xl:mt-[3%]  w-[60px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]" />   
  )
}

export default BtnManga