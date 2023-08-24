import React from "react";

const BtnMyManga = ({ name, color, hover, value, action, isChecked }) => {
// console.log(color, hover, name);
  return (isChecked ? (
    <label
      className=" relative  text-justify   pl-[14px] md:pl-[26px] mx-[2%] xl:mx-[1.5%] mt-[10%] xl:mt-[3%]  w-[60px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]"
      style={{ backgroundColor: `${color}`, color: `${hover}` }}
    >
      <span className="absolute inset-x-[20%] top-3">{name}</span>
      <input
        className="hidden"
        onChange={action}
        value={name}
        name='name'
        id={value}
        type="radio"
        defaultChecked={isChecked}
        style={{ display: "none" }}
      />
    </label>
  ) : (
    <label
      className=" cursor-pointer relative   text-justify   pl-[14px] md:pl-[26px] mx-[2%] xl:mx-[1.5%] mt-[10%] xl:mt-[3%]  w-[60px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]"
      style={{ backgroundColor: `${hover}`, color: `${color}` }}
    >
      <span className="absolute inset-x-[20%] top-3">{name}</span>
      <input
        className="hidden"
        onChange={action}
        value={name}
        name='name'
        id={value}
        type="radio"
        defaultChecked={isChecked}
      />
    </label>)
  )
};

export default BtnMyManga;


