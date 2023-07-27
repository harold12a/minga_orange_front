import React from "react";
import Footer from "../components/Footer";

const StartChapter = () => {

    return (

        <nav className="flex flex-col">
            <h1 className="text-[40px] text-white text-center mt-[10px]">nombre del capitulo</h1>
            <img className="mt-[20px] w-[430px] bg-white"
                src="../../src/assets/images/start_chapter.png"
            />
            <div class="grid grid-cols-2 gap-[300px] justify">
                <div class="flex justify-center">
                    <svg class="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                </div>
                <div class="flex justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                </div>
            </div>

            <div className="mt-[700px] mr-[50px]">
                <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[80px] w-[250px] lg:w-[350px]'
                    type="text"
                    name="Title Manga"
                    id="Title Manga"
                    placeholder='Title Manga'
                />
            </div>
        </nav>

    )

}

export default StartChapter