import React, { useRef, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import EditMangas from "../components/EditMangas";
import { useSelector, useDispatch } from "react-redux";
import mangaAction from "../store/actions/mangas";
import BtnMyManga from "../components/BtnMyManga";
import Footer from "../components/Footer";
import mangasActions from "../store/actions/mangas";
import Swal from "sweetalert2";

const { data } = mangaAction;
const { readManga } = mangasActions;

const MyMangas = () => {
  const inputChecked = useRef();

  const checks = useSelector((store) => store.manga.checks);
  // console.log(checks);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  // console.log(categories);
  const [hasResults, setHasResults] = useState(true);


  const mangasByCategory = useSelector(
    (store) => store.manga_upd_del.mangasByCategory
  );
  // console.log(mangasByCategory);

  useEffect(() => {
    dispatch(readManga({}));
  }, [checks]);

  useEffect(() => {
    axios
      .get(apiUrl + "categories")
      .then((res) => setCategories(res.data.response))
      .catch((error) => console.log(error));
  }, []);
  const setCheck = (e) => {
    let checks = Object.values(inputChecked.current)
      .filter((each) => each.checked)
      .map((each) => each.value);
    console.log(checks);
    dispatch(data({ checks }));
  };
  let user = JSON.parse(localStorage.getItem("user"));
  let email = user?.email;

  useEffect(() => {
    // Actualiza el estado hasResults en función de mangasByCategory y checks
    const hasResultsInCategory = mangasByCategory.some(
      (each) => each[0] === checks[0] && each[1].length > 0
    );

    setHasResults(hasResultsInCategory);
  }, [mangasByCategory, checks]);

  const showMessage = () => {
    Swal.fire({
      icon: "success",
      title: "¡ Welcome !",
      html: `
        <div class="flex flex-col items-center mt-8">
        
          <h3 class="mt-2 text-center text-red-500 font-semibold text-lg">
            My Mangas
          </h3>
          <p class="mt-2 text-center text-gray-600">
            Select a category to eliminate or edit.
          </p>
        </div>
      `,
      showCancelButton: false,
      confirmButtonColor: "#d33",
      confirmButtonText: "Close",
    });
  };

  return (
    <>
      <main className="  bg-[url('/assets/images/myMangas.jpg')]  bg-cover   absolute   lg:h-[70%]   bg-center mt-[-18%] xl:mt-[0%]   h-[50%] w-full  xl:w-[100%]   ">
        <h1 className=" text-center text-white text-3xl  xl:text-[280%] absolute mt-[48%] ml-[23%] xl:ml-[38%]  md:mt-[30%] xl:mt-[11%] md:ml-[35%]">
          {email}
        </h1>
        <div className="mt-[90%] md:mt-[60%] xl:mt-[30%] "></div>
        <div className=" h-screen  bg-[#EBEBEB] xl:bg-white rounded-t-[70px] xl:rounded-t-[20px] mt-[80px] xl:w-[95%] xl:ml-[2.5%]">
          <form
            ref={inputChecked}
            className="flex xl:justify-start xl:ml-[12%] justify-center"
          >
            {categories.map((each) => (
              <BtnMyManga
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

          <div className="xl:grid  grid-rows-2 gap-x-[11%] grid-flow-col  xl:mx-[15%] ">
            {hasResults ? (
              mangasByCategory?.map((each) => {
                if (each[0] === checks[0]) {
                  return each[1]?.map((manga) => (
                    <EditMangas
                      key={manga._id}
                      title={manga.title}
                      cover_photo={manga.cover_photo}
                      type={manga.category_id?.name}
                      color={manga.category_id?.color}
                      hover={manga.category_id?.hover}
                      manga_id={manga._id}
                      category={manga.category_id?.name}
                    />
                  ));
                }
                return null; // Return null for other categories
              })
            ) : (
              <div className="flex flex-col items-center mt-[125px]">
               
                <button
                  onClick={showMessage}
                  className="px-4 py-2 mt-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  ¡ Show Message !
                </button>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default MyMangas;
