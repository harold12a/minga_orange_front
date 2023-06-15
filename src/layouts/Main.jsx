import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
    {/* <div className=" bg-[url('../../src/assets/branden-sk.jpg')] bg-cover bg-repeat-x  bg-center absolute h-screen w-full top-0 left-0 xl:bg-[url('../../src/assets/branden-desktop.png')] ">   */}
    <Navbar/>
    {/* <Footer/> */}
    <Outlet/>
       {/* </div>   */}
    </>
  )
}

export default Main


