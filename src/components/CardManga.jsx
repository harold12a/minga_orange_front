import React from 'react'

const CardManga = ({title}) => {
  return (
    <>
    <div className="bg-white rounded-[20px] mt-[30px] w-[85%] mx-[8%]  xl:ml-[12%] xl:w-[35%] ">
       
    <h1 className="font-bold grid grid-cols-2 gap-2 text-[18px] md:text-[29px] pl-[30px] pt-6 ">
      {title}
    </h1>
    <h2 className="text-orange-400 font-bold pl-[30px] md:text-[25px]">
   
      Type
    </h2>

    <img
      className=" w-[50%] ml-[50%] rounded-l-[50%] rounded-r-[10%] "
      src="../../src/assets/images/card-naruto.png"
      alt="img-naruto"
    />
  </div>
  
      
    </>
  )
}

export default CardManga