import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import header from "../header";
import CardManga from "../components/CardManga";
import { useSelector, useDispatch } from "react-redux";
import mangaAction from "../store/actions/mangas";
import BtnManga from "../components/BtnManga";

const { saveTitle } = mangaAction;

const Mangas = () => {
  const store = useSelector((store) => store);
  console.log(store);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [mangas, setMangas] = useState([]);
  console.log(categories);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    axios(apiUrl + "mangas?title=" + store.mangas.text, header())
      .then((res) => {
        setMangas(res.data.response);
        console.log(res.data.response);
        setPrev(res.data.prev_page);
        setNext(res.data.next_page);
        if (res.data.response.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
        }
      })
      .catch((error) => {
        setNoResults(true);
        console.log(error);
      });
  }, [store.mangas.text]);

  useEffect(() => {
    axios
      .get(apiUrl + "categories")
      .then((res) => setCategories(res.data.response))
      .catch((error) => console.log(error));
  }, []);

  const setCheck = (e) => {
    e.target.checked = !e.target.checked && true;
    console.log(e.target.checked = !e.target.checked && true);
  };

  const actionBtn = (page) => {
    console.log(page);
    window.location.replace(`/mangas/${page}`);

  };

  return (
    <>
      <main className="  bg-[url('../../src/assets/images/pexels-lisa.jpg')]  bg-cover   absolute   lg:h-[70%]   bg-center mt-[-18%] xl:mt-[0%]   h-[50%] w-full  xl:w-[100%]    ">
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
            onChange={(event) =>
              dispatch(saveTitle({ title: event.target.value }))
            }
            defaultValue={store.mangas.text}
          />
          <RiSearch2Line className="w-6 xl:w-10 h-6 mt-[-42px] ml-[15%] md:ml-[33%] xl:ml-[22%] text-indigo-700 xl:text-gray-500" />
        </div>

        <div className=" h-screen  bg-[#EBEBEB] xl:bg-white rounded-t-[70px] xl:rounded-t-[20px] mt-[80px] xl:w-[95%] xl:ml-[2.5%]">
       
          <div className="flex xl:justify-start xl:ml-[12%] justify-center">
            {categories.map(each => 
              <BtnManga
                key={each._id}
                name={each.name}
                color={each.color}
                hover={each.hover}
                value={each._id}
                action={(e) => setCheck(e)}
              />
            )}
          </div>

          {noResults ? (
            <p className="text-center text-red-500 font-semibold my-8 mt-[100px] text-[25px] ">
              <svg
                className="mx-auto h-16 w-16 text-red-500  "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <br />
              ¡Lo sentimos!
              <br />
              No se encontraron resultados para la búsqueda.
              <br />
              Por favor, intenta con otro término de búsqueda.
            </p>
          ) : (
            <>
              <div className="xl:grid  grid-rows-2 gap-x-[11%] grid-flow-col xl:justify-center xl:mx-[10%] ">
                {mangas.map((each) => (
                  <CardManga
                    key={each._id}
                    title={each.title}
                    cover_photo={each.cover_photo}
                    type={each.category_id.name}
                    color={each.category_id.color}
                  />
                ))}
              </div>
            </>
          )}

          <div className="flex justify-center">
            {prev && (
              <input
                type="button"
                value={"previus page"}
                onClick={(e) => {
                  actionBtn(e.target.value);
                }}
              />
            )}
            {next && (
              <input
                type="button"
                value={"next page"}
                onClick={(e) => {
                  actionBtn(e.target.value);
                }}
                className=" bg-black text-green-500    pl-[5px] mt-[5%] xl:mt-[10%] w-[80px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]"
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Mangas;
