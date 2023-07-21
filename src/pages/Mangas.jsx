import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Link as Anchor } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import header from "../header";
import CardManga from "../components/CardManga";
import { useSelector,useDispatch } from "react-redux";
import mangaAction from '../store/actions/mangas'


const {saveTitle} = mangaAction

const Mangas = () => {
  const store = useSelector(store =>store)
  const dispatch = useDispatch()
  console.log(store);
  const [title, setTitle] = useState("");
  const [mangas, setMangas] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  useEffect(() => {
   
    axios(apiUrl + "mangas?title=" + store.mangas.text, header())
      .then((res) => {
        setMangas(res.data.response);
        console.log(res.data.response);
        setPrev(res.data.prev_page);
        setNext(res.data.next_page);
      })
      .catch((error) => console.log(error));
  }, [store.mangas.text]);

  return (
    <>
      <main className="  bg-[url('../../src/assets/images/pexels-lisa.jpg')] bg-cover   absolute   lg:h-[70%]   bg-center mt-[-18%] xl:mt-[0%]   h-[50%] w-full  xl:w-[100%]    ">
        <h1 className="text-white text-3xl xl:text-[65px] absolute mt-[40%] ml-[33%] xl:ml-[43%] md:mt-[35%] xl:mt-[13%] md:ml-[45%]">
          Mangas
        </h1>
        <div>
          <input
            className="flex justify-center xl:bg-gray-200  border-gray-100 bg-white pl-[60px] mx-auto mt-[60%] md:mt-[42%] xl:mt-[24%] w-[320px] xl:w-[1100px] h-[60px] rounded-[50000px] xl:rounded-lg text-[20px] xl:text-[30px]"
            type="text"
            name="insertManga"
            id="insertManga"
            placeholder="Find your manga here"
            onChange={(event) => dispatch(saveTitle({title:event.target.value}))} defaultValue={(store.mangas.text)}
          />
          <RiSearch2Line className="w-6 xl:w-10 h-6 mt-[-42px] ml-[15%] md:ml-[33%] xl:ml-[22%] text-indigo-700 xl:text-gray-500" />
        </div>

        <div className=" h-screen  bg-[#EBEBEB] rounded-t-[70px] xl:rounded-t-[20px] mt-[80px] xl:w-[95%] xl:ml-[2.5%]">
          <div className=" flex justify-center xl:justify-start xl:ml-[12%] ">
            <Anchor className=" hidden xl:block bg-gray-400 text-gray-800  pt-[7px] md:pt-[10px]  pl-[15px] md:pl-[40px] mx-[2%] mt-[15%] xl:mt-[5%]  w-[70px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]">
              all
            </Anchor>
            <Anchor className=" bg-red-200 text-red-500 pt-[7px] md:pt-[10px]  pl-[15px] md:pl-[26px] mx-[2%] xl:mx-[-1%] mt-[15%] xl:mt-[5%] w-[70px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]">
              Shonen
            </Anchor>
            <Anchor className=" bg-orange-200 text-orange-500 pt-[7px] md:pt-[10px] pl-[13px] md:pl-[26px] mx-[2%]  mt-[15%] xl:mt-[5%]  w-[60px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]">
              Seinen
            </Anchor>
            <Anchor className=" bg-green-200 text-green-500 pt-[7px] md:pt-[10px]  pl-[15px] md:pl-[26px] mx-[2%] xl:mx-[-1%] mt-[15%] xl:mt-[5%] w-[60px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]">
              Shojo
            </Anchor>
            <Anchor className=" bg-purple-200 text-purple-500 pt-[7px] md:pt-[10px] pl-[15px] md:pl-[26px] mx-[2%]  mt-[15%] xl:mt-[5%]  w-[70px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]">
              kodomo
            </Anchor>
          </div>
          <div className="" >
            {mangas.map((each) => <CardManga key={each._id} title={each.title} />)}
           
          </div>
          <div>
          {prev && <input type="button" value={'previus page'}/>}
            {next && <input type="button" value={'next page'}/>}
          </div>

        </div>
      </main>
    </>
  );
};

export default Mangas;
