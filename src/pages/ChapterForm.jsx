import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from 'axios';
import header from '../header';
import Swal from 'sweetalert2';
import apiUrl from '../apiUrl';

export default function ChapterForm() {
    const navigate = useNavigate()

    const insertTitle = useRef();
    const insertOrder = useRef();
    const insertPages = useRef();

    const send = async () => {

        let data = {
            insertTitle: insertTitle.value,
            insertOrder: insertOrder.value,
            insertPages: insertPages.value
        };

        try {
            await axios.post(apiUrl + "/chapters", data, header());
            Swal.fire({
                icon: "success"
            });
            navigate("/");
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: '¡information error!',
                html: error.response.data.messages.map(each=>`<p>${each}</p>`).join(''),
            })
        }

    };

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
    );
}

