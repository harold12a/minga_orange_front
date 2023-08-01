import { useEffect, useState } from 'react';
import apiUrl from '../apiUrl';
import axios from 'axios';
import profile from '../assets/images/profile.png'
import cake from '../assets/images/cake.svg'
import location from '../assets/images/location-marker.svg'
import edit from '../assets/images/pencil_alt.svg'



export default function Author_profile() {


    return (
        <div className="flex justify-center mt-5">            
            <img className='w-[71px] h-[71px] rounded-[50px] object-cover' src={profile} alt='Perfil' />
            <div className='flex flex-col justify-center  ml-5  mr-5 font-poppins'>
                <p className='text-xl font-roboto font-normal'> {profile} </p>
                <p className='text-base font-roboto font-normal flex text-[#9D9D9D]'> <img className="mr-1" src={location} /> buenos aires </p>
                <p className='text-base font-roboto font-normal flex text-[#9D9D9D]'> <img className="mr-1" src={cake} />fecha</p>
            </div>
            <img className='cursor-pointer transition hover:scale-110' src={edit} alt='Perfil' />
        </div>
    )
}