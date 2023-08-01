import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import React from "react";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import { data } from "autoprefixer";

const Carousel = () => {
  const d_left =
    "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  const d_right =
    "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios(apiUrl + "/categories")
      .then(res => {setCategories( res.data.response)})
      .catch((err) => console.log(err));
  }, []); //el array esta vacio el efecto se ejecuata por primera y unica vez cuando el componente se monta
  // si el array tienee alguna variable, el efecto se ejecuata cada vez que se modificque esos parametros

  const [counter, setCounter] = useState(0);

  const next = () => {
    if (counter === categories.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
    console.log(counter);
  };
  
  const prev = () => {
    if (counter === 0) {
      setCounter(categories.length - 1);
    } else {
      setCounter(counter - 1);
    }
    console.log(counter);
  };
  
  return (
    <div className="bottom-0  mt-[260px] mb-[24px] hidden xl:block overflow-x-hidden">
      <div className="h-[250px] mx-auto w-[90%]  mb-[30px] rounded-[5px] relavite" style={{ backgroundColor: categories[counter]?.color }}>
      
        <h1 className=" absolute text-white pl-[50%] pt-[3%]">{categories[counter]?.name}</h1>
        <p className="absolute text-white pr-[18%] pl-[50%] pt-[5%] mb-3">
          {categories[counter]?.description}
        </p>
        <img
          src={categories[counter]?.character_photo}
          alt="imagen1"
          className="absolute top-[630px] left-[270px] h-64 w-64"
        />

        <img
          src={categories[counter]?.cover_photo}
          alt=""
          className="absolute top-[620px] left-[600px] h-[250px] w-[190px] "
        />
        <button className="absolute bg-slate-300 rounded-[50px]  ml-[85%] mt-[6%] p-[6px]">
          <RiArrowRightLine d={d_left} onClick={next} />
        </button>
        <button className="absolute bg-slate-300 rounded-[50px] ml-[2.5%] mt-[6%] p-[6px] ">
          <RiArrowLeftLine d={d_right} onClick={prev} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
