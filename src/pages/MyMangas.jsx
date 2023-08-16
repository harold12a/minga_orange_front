import React, { useRef, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import header from "../header";
import EditMangas from "../components/EditMangas";
import { useSelector, useDispatch } from "react-redux";
import mangaAction from "../store/actions/mangas";
import BtnManga from "../components/BtnManga";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
// import authorActions from '../store/actions/authors';
import { Link as Anchor } from "react-router-dom";
import commentsActions from "../store/actions/mangas";




const { data } = mangaAction;
const { readManga, destroyManga } = commentsActions;

// const { saveProfile } = authorActions

const MyMangas = () => {
  const inputChecked = useRef();
 
  const checks = useSelector((store) => store.manga.checks);

  // console.log(checks);
 
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  
  // console.log(categories);

  const [noResults, setNoResults] = useState(false);
  const { page } = useParams();
  const navigate = useNavigate();
  const mangas = useSelector((store) => store.manga_upd_del.mangas);
  const next = useSelector((store) => store.manga_upd_del.next);
  const prev = useSelector((store) => store.manga_upd_del.prev);
  console.log(mangas);

  // const profile = store.authors.profile
  // console.log(profile);

  const actionBtn = (numberPage) => {
    navigate(`/my-mangas/mangas/${numberPage}`);
  };

  useEffect(() => {
 dispatch(readManga({checks, page:1}))
  }, [checks]);

  useEffect(() => {
    dispatch(readManga({checks, page}))
  }, [page]);

  useEffect(() => {
    axios
      .get(apiUrl + "categories")
      .then((res) => setCategories(res.data.response))
      .catch((error) => console.log(error));
  }, []);
  const setCheck = (e) => {
    let checks = Object.values(inputChecked.current)
      .filter((each) => each.checked)
      .map((each) => each.id);
    // console.log(checks);
    dispatch(data({ checks }));
  };
  return (
    <>
      <main className="  bg-[url('../../src/assets/images/myMangas.jpg')]  bg-cover   absolute   lg:h-[70%]   bg-center mt-[-18%] xl:mt-[0%]   h-[50%] w-full  xl:w-[100%]   ">
        <h1 className=" text-center text-white text-3xl  xl:text-[280%] absolute mt-[40%] ml-[23%] xl:ml-[38%]  md:mt-[30%] xl:mt-[11%] md:ml-[35%]">
          <p className="">
            <br />
            CompanyName
            <br />
            o
            <br />
            AuthorName
          </p>
        </h1>

        <div className="mt-[90%] md:mt-[60%] xl:mt-[30%] "></div>

        <div className=" h-screen  bg-[#EBEBEB] xl:bg-white rounded-t-[70px] xl:rounded-t-[20px] mt-[80px] xl:w-[95%] xl:ml-[2.5%]">
          <form
            ref={inputChecked}
            className="flex xl:justify-start xl:ml-[12%] justify-center"
          >
            {categories.map((each) => (
              <BtnManga
                key={each._id}
                name={each.name}
                color={each.color}
                hover={each.hover}
                value={each._id}
                action={(e) => {
                  setCheck(e);
                }}
                isChecked={checks?.includes(each._id)}
              />
            ))}
          </form>

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
              We're sorry!
              <br />
              No results found for the search.
              <br />
              Please try another search term.
            </p>
          ) : (
            <>
              <div className="xl:grid  grid-rows-2 gap-x-[11%] grid-flow-col  xl:mx-[15%] ">
                {mangas.map((each) => (
                  <EditMangas
                    key={each._id}
                    title={each.title}
                    cover_photo={each.cover_photo}
                    type={each.category_id.name}
                    color={each.category_id.color}
                    hover={each.category_id.hover}
                  />
                )
                )}
               
              </div>  
            </>
          )}

          <div className="flex justify-center   ">
            {prev && (
              <button
                type="button"
                value={prev}
                onClick={(e) => {
                  actionBtn(e.target.value);
                }}
                className=" bg-black text-green-500  mr-6  pl-[5px] mt-[5%] xl:mt-[10%] w-[80px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]"
              >
                prev{" "}
              </button>
            )}
            {next && (
              <button
                type="button"
                value={next}
                onClick={(e) => {
                  actionBtn(e.target.value);
                }}
                className=" bg-black text-green-500    pl-[5px] mt-[5%] xl:mt-[10%] w-[80px] md:w-[100px] h-[35px] md:h-[45px] rounded-[50000px] text-[12px] md:text-[15px]"
              >
                next{" "}
              </button>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default MyMangas;
