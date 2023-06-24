import React from 'react'
import { Link as Anchor } from 'react-router-dom'

const Welcome = ({changeView, setChangeView}) => {
  return (
    <div className="text-center text-[#FFFFFF] font-Roboto not-italic flex-none order-none flex-grow-0 items-center mt-[240px] xl:mt-[290px] ">
    <h1 className=" mt-[200px] font-bold text-[40px] xl:text-[65px] leading-47 w-388 h-94 xl:mt-[90px]  ">
      Your favorite comic book store
    </h1>
    <p className=" sm: mt-2 pl-2 font-normal w-400px text-[16px] leading-19px block xl:hidden ">
      From classics to novelties, we have everything you need to immerse
      yourself in your favorite universes. Explore our catalog and live
      the adventure of your life.
    </p>
    <p className="hidden xl:block  xl:text-[35px]">
      Explore our catalog to live the adventure of
    </p>
    <p className="hidden xl:block xl:text-[35px]"> your life</p>
    <button className="mt-7 mx-auto w-72 xl:w-363 h-14 xl:h-68 bg-[#4338CA] rounded-[50000px] block xl:hidden">
      Started
    </button>
    <Anchor to='/singin' className="mt-10 pt-[15px]  mx-auto w-72 xl:w-363 h-14 xl:h-68 bg-[#4338CA] rounded-[50000px] hidden xl:block">
      Let´s go!
    </Anchor>
    </div>
    
  )
}

export default Welcome