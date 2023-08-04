import React from "react";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../store/actions/chapters"
import header from "../header.js";

const DetailsChapter = () => {
    const d_left =
        "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
    const d_right =
        "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
    const navigate = useNavigate()
    let { id } = useParams()
    let [pages, setPages] = useState([])
    let [chapter, setChapter] = useState([])
    let [contains, setContains] = useState(0);
    let [nextPage, setNextPages] = useState("")
    let dispatch = useDispatch()
    const { save_data } = chapterActions
    const store = useSelector((store) => store);

    useEffect(() => {
        axios.get(apiUrl + '/chapters/' + id, header())
            .then(res => {
                console.log(res)
                setPages(res.data.response.pages)
                setNextPages(res.data.next)
                dispatch(save_data(
                    {
                        title: res.data.response.title,
                        order: res.data.response.order
                    }
                ))
            })
            .catch((err) => console.log(err));
    },
        [nextPage]
    );


    console.log(store)


    const next = () => {
        if (contains >= pages.length - 1) {
            setContains(0);
            window.location.replace(`/details-chapter/${nextPage}/0`)
        } else {
            console.log(nextPage)
            setContains(contains + 1);
            navigate(`/details-chapter/${id}/${contains}`)
        }
        console.log(contains);
    };

    const prev = () => {
        if (contains <= 0) {
            setContains(0);
            window.location.replace(`/MangaDetail`)
        } else {
            setContains(contains - 1);
        }
        console.log(contains);
    };

    return (
        <nav className="flex flex-col">
            <div className="bg-blue-900 h-[80px] lg:h-[98px]">
                <h1 className="w-full h-full text-[19px] text-white text-center mt-[20px] -ml-9 p-1 lg:mt-2 lg:text-[40px] lg:w-full lg:h-full">
                    {store.chapter.title}
                </h1>
            </div>
            <div className="flex justify-between items-center ml-6 relative lg:mr-20 lg:justify-center lg:relative lg:h-screen">
                <div className="lg:absolute lg:mr-[950px] bg-cover">
                    <button className="absolute bg-transparent ml-[440px] mt-[8px]  lg:w-full lg:bg-transparent lg:ml-[970px] ">
                        <RiArrowRightLine d={d_left} onClick={next} style={{ fontSize: "30px" }} />
                    </button>
                    <button className="absolute bg-transparent ml-[0px] mt-[8px]  lg:w-full lg:bg-transparent lg:-ml-[50px]">
                        <RiArrowLeftLine d={d_right} onClick={prev} style={{ fontSize: "30px" }} />
                    </button>
                </div>
                <img className="object-cover lg:w-[950px] lg:h-full bg-white w-screen bg-center lg:mt-28"
                    src={pages[contains]} />
            </div>
            <div className="-mt-20 ml-59 lg:p-3">
                <input className='bg-white absolute mt-[90px] w-[50px] lg:w-[50px] lg:ml-[700px] lg:mt-[180px] '
                    type=""
                    name=""
                    id=""
                    placeholder={contains}
                />
                <h4 className="">  {store.chapter.order} </h4>
                <img className="absolute mt-[90px] w-[45px] -ml-[55px] lg:absolute lg:w-[50px] lg:ml-[630px] lg:mt-[180px] "
                    src="../../src/assets/images/iconComent.png" />
            </div>
        </nav>

    )

}

export default DetailsChapter

