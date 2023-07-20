import React from "react";


const EditChapter = () => {


    return (

        <main className='bg-slate-200 flex w-full h-full items-center justify-between md:top-1'>
            <div className="md:leght-1 md:h-screen md:w-[50%]">
                <img
                    className='hidden md:block md:absolute md:top-[266px] md:right-[150px] md:h-[574px] md:w-[524px]'
                    src="../../src/assets/images/edit_chapter.png"
                    alt="authorprofile"
                />
            </div>
            <div className='flex flex-col md:absolute  justify-center items-center w-full md:left-16 md:w-[60%]'>
            <h1 className='text-[40px] text-center mt-[160px]'>Edit Chapter</h1>
            <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[80px] w-[250px]'
                type="text"
                name="Title Manga"
                id="Title Manga"
                placeholder='Title Manga'
            />
            <select className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[40px] w-[250px]'
                type="text"
                name="Select Order"
                id="Select Order"
                placeholder='Select Order'
            />
            <select className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[40px] w-[250px]'
                type="text"
                name="Select Data"
                id="Select Data"
                placeholder='Select Data'
            />
            <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[40px] w-[250px]'
                type="text"
                name="Data To Edit"
                id="Data To Edit"
                placeholder='Data To Edit'
            />
            <input className='flex justify-center w-[280px] h-[68px] text-xl my-2 mx-auto mt-[80px] text-[#FFFFFF] rounded-full bg-gradient-to-r from-[#34D399] to-[#34D399]'
                type="button"
                value="Edit"
            />
            <input className='flex justify-center w-[280px] h-[68px] text-xl my-2 mx-auto mt-[40px] text-[#EE8380] rounded-full bg-gradient-to-r from-[#FBDDDC] to-[#FBDDDC]'
                type="button"
                value="Delet"
            />
            </div>
        </main>

    )

}

export default EditChapter