import React from 'react'
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const ChapterForm = () => {
    const navigate = useNavigate()
    const send = () => {
        setTimeout(() => navigate('/singin'), 2000)

        let data = {
            insertTitle: insertTitle.current.value,
            insertOrder: insertOrder.current.value,
            insertPages: insertPages.current.value
        }
        console.log(data);
    }

    const insertTitle = useRef()
    const insertOrder = useRef()
    const insertPages = useRef()

    return (

        <div className='bg-slate-200 absolute w-full h-full'>
            <h1 className='text-[30px] text-center mt-[160px]'>New Chapter</h1>
            <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[80px] w-[250px]'
                type="text"
                name="insertTitle"
                id="insertTitle"
                placeholder='insert title' 
                ref={insertTitle} />
            <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[30px] w-[250px]'
                type="text"
                name="insertOrder"
                id="insertOrder"
                placeholder='insert order' 
                ref={insertOrder} />
            <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[30px] w-[250px]'
                type="text"
                name="insertPages"
                id="insertPages"
                placeholder='insert pages' 
                ref={insertPages} />
            <input className='flex justify-center w-[260px] h-[45px] text-xl my-2 mx-auto mt-[80px] text-white rounded-lg bg-gradient-to-r from-[#4338CA] to-[#4338CA]'
                type="button"
                value="send"
                onClick={send}
            />
        </div>
    )
}

export default ChapterForm