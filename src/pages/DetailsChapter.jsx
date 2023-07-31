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
    let { id, page } = useParams()
    let [pages, setPages] = useState([])
    let [nextPage, setNextPages] = useState("")
    let dispatch = useDispatch()
    const { save_data } = chapterActions

    useEffect(() => {
        axios(apiUrl + `chapters/${id}`, header())
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
        []
    );

    const store = useSelector(store => store)

    console.log(store)

    let [contains, setContains] = useState(0);

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
            <div class="flex justify-between items-center relative mt-10 mr-2 lg:mr-20 lg:justify-center lg:relative lg:h-screen">
                <div class="lg:absolute lg:mr-[950px] bg-cover">
                    <button className="absolute bg-slate-300 rounded-[50px] ml-[85%] mt-[6%] p-[6px] lg:ml-[970px] ">
                        <RiArrowRightLine d={d_left} onClick={next} />
                    </button>
                    <button className="absolute bg-slate-300 rounded-[50px] ml-[2.5%] mt-[6%] p-[6px] lg:ml-0">
                        <RiArrowLeftLine d={d_right} onClick={prev} />
                    </button>
                </div>
                <img className="md:w-[980px] md:h-full bg-white w-screen bg-center lg:mt-28"
                    src={pages[contains]} />
            </div>
            <div className="-mt-20 ml-60 lg:p-3">
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