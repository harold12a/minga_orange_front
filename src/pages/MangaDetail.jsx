import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import apiURL from "../apiUrl.js";
import axios from "axios";
import header from "../header.js";
import ChapterDetail from "../components/ChapterDetail";
import MangaDetails from "../components/MangaDetails.jsx";
import TitleChapter from "../components/TitleChapter";
import mangaAction from "../store/actions/manga";
import imageSrc from "../../src/assets/images/Frame588.png";
import iconGood from "../../src/assets/images/bueno.svg";
import iconBad from "../../src/assets/images/malo.svg";
import iconOpenVoice from "../../src/assets/images/a.svg";
import iconLove from "../../src/assets/images/megusta.svg";
const { saveManga } = mangaAction;

const MangaDetail = () => {
  const dispatch = useDispatch();
  const manga = useSelector(store => store);
  console.log(manga);
  const { manga_id, page } = useParams();
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState(true);
  const [mangaStyle, setMangaStyle] = useState({
    backgroundColor: "#4338CA",
    color: "white",
  });
  const [chapterStyle, setChapterStyle] = useState({
    backgroundColor: "#EBEBEB",
    color: "#9D9D9D",
  });
  const store = useSelector((store) => store);

  


  useEffect(() => {
    // if (!manga) { //este conicional funciona pero cuando cambie de manga no se volverá a refetchear el nuevo manga
    if (manga._id !== store.mangas.manga_detail) {
      axios(apiURL + "mangas/" + manga_id, header())
        //.then(res => setManga(res.data.response))
        .then((res) => {
          dispatch(
            saveManga({
              manga_detail: { ...res.data.response.manga, manga_id },
            })
          );
        })
        .catch((error) => console.log(error));
    }
  }, []);


  useEffect(() => {
    if (show) {
      setMangaStyle({ backgroundColor: "#4338CA", color: "white" });
      setChapterStyle({ backgroundColor: "#EBEBEB", color: "#9D9D9D" });
    } else {
      setMangaStyle({ backgroundColor: "#EBEBEB", color: "#9D9D9D" });
      setChapterStyle({ backgroundColor: "#4338CA", color: "white" });
    }
  }, [show]);

  return (
    <div className="  p-4 md:p-8 flex flex-col items-center">
      <div className="w-full h-full overflow-hidden">
        <img
          src={manga?.cover_photo}
          alt="Imagen"
          className="mt-14 w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold mt-4">{manga?.title}</h2>

      <div className="flex items-center font-poppins px-4 py-2">
        <div className="text-xs mr-16 text-[#EF8481] bg-[#FFE0DF] rounded-2xl h-[37px] w-[70px] justify-center flex items-center  font-poppins">
          {manga?.category_id?.name}
        </div>
        <h2 className=" text-xl tracking-wider text-[#9D9D9D] ">
          {manga?.author_id?.name.toUpperCase()}
        </h2>
      </div>
      <div className="flex items-center mt-2">
        <span>
          {" "}
          <img src={iconGood} alt="" />
        </span>
        <span>
          {" "}
          <img src={iconBad} alt="" />
        </span>
        <span>
          {" "}
          <img src={iconOpenVoice} alt="" />
        </span>
        <span>
          {" "}
          <img src={iconLove} alt="" />
        </span>
      </div>
      <div className="w-full flex mt-4 justify-between bg-[#FFFFFF]">
        <div className="flex flex-col p-4 border-r">
          <h2>4.5/5</h2>
          <h4>Rating</h4>
        </div>
        <div className="flex flex-col p-4 border-r">
          <h2 className="text-center">265</h2>
          <h4>chapters</h4>
        </div>
        <div className="flex flex-col p-4">
          <h2 className="text-center">Eng</h2>
          <h4>Leanguage</h4>
        </div>
      </div>

      <div className="w-52 flex items-center cursor-pointer rounded-full h-8 bg-white border border-gray-400">
        <input
          type="button"
          value="Manga"
          onClick={() => {
            setShow(!show), setTitle(!title);
          }}
          className={`flex items-center justify-center w-1/2 h-full rounded-full text-[#9D9D9D] ${
            title ? "bg-orange-500 text-white" : "bg-[#EBEBEB] text-[#9D9D9D]"
          }`}
        />
        <input
          type="button"
          value="Chapter"
          onClick={() => {
            setShow(!show), setTitle(!title);
          }}
          className={`flex items-center justify-center w-1/2 h-full rounded-full  text-[#9D9D9D] ${
            !title ? "bg-orange-500 text-white" : "bg-[#EBEBEB] text-[#9D9D9D]"
          }`}
        />
      </div>

      {show ? <MangaDetails /> : <DetailsChapter />}
    </div>
  );
};

export default MangaDetail;
