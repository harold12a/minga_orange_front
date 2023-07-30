import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const DetailsChapter = () => {

    return (
        <nav className="flex flex-col">
            <div className="bg-blue-900 h-[80px] lg:h-[98px]">
                <h1 className="w-full h-full text-[19px] text-white text-center mt-[20px] -ml-9 p-1 lg:mt-2 lg:text-[40px] lg:w-full lg:h-full">n° nombre del capitulo</h1>
            </div>
            <div class="flex justify-between items-center relative lg:justify-center lg:relative lg:h-screen">
                <div class="lg:absolute lg:mr-[950px] bg-cover">
                    <svg class="absolute w-8 h-8 bg-white -rotate-90 lg:-rotate-90 lg:mt-8"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                        <RiArrowRightLine d={c_left} onClick={prev} />
                    </svg>
                </div>
                <div class="lg:w-full lg:absolute">
                    <svg class="absolute w-8 h-8 bg-white left-[450px] rotate-90 lg:left-[1395px] lg:rotate-90 lg:mt-8"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                        <RiArrowRightLine d={c_right} onClick={next} />
                    </svg>
                </div>
                <img className="md:w-[980px] md:h-full bg-white w-screen bg-center lg:mt-28"
                    src="" />
            </div>
            <div className="-mt-20 ml-64 lg:p-3">
                <input className='bg-white absolute mt-[50px] w-[45px] lg:w-[50px] lg:ml-[690px] lg:m-24'
                    type=""
                    name="45"
                    id=""
                    placeholder='45'
                />
                <img className="absolute mt-[45px] w-[45px] -ml-[55px] lg:absolute lg:w-[50px] lg:ml-[630px] lg:mt-[85px] "
                    src="../../src/assets/images/iconComent.png" />
            </div>
        </nav>

    )

}

export default DetailsChapter