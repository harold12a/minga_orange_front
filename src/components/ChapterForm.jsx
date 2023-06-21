import React from 'react'

const ChapterForm = () => {
  return ( 

    <div className='bg-slate-200 absolute w-full h-full'>
        <h1 className='text-[30px] text-center mt-[160px]'>New Chapter</h1>
        <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[80px] w-[250px]' 
        placeholder='insert title' />
        <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[30px] w-[250px]' 
        placeholder='insert order' />
        <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[30px] w-[250px]' 
        placeholder='insert pages' />
        <input className='flex justify-center w-[260px] h-[45px] text-xl my-2 mx-auto mt-[80px] text-white rounded-lg bg-gradient-to-r from-[#4338CA] to-[#4338CA]'
            type="button"
            value="send"
          />
    </div>
  )
}

export default ChapterForm