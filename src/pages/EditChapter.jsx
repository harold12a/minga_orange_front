import React from "react";


const EditChapter = () => {


    return (

        <main className='bg-slate-200 flex absolute w-full h-full items-center justify-between '>
            <div className='hidden xl:block'>
            <h1 className='flex flex-col-reverse'>hola</h1>
                <img
                    className='lg:absolute lg:top-[256px] lg:right-[200px] lg:h-[544px] lg:w-[600px]'
                    src="../../src/assets/images/edit_chapter.png"
                    alt="authorprofile"
                />
            </div>
            <div className='flex flex-col items-center w-full md:m-0 md:w-full lg:min-h-screen lg:absolute lg:left-10 lg:w-[50%] lg:m-2 lg:top-[1px]'>
            <h1 className='text-[40px] text-center mt-[160px] md:w-[350px]'>Edit Chapter</h1>
            <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[80px] w-[250px] lg:w-[350px]'
                type="text"
                name="Title Manga"
                id="Title Manga"
                placeholder='Title Manga'
            />
            <select className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[40px] w-[250px] lg:w-[350px]'
                type="text"
                name="Select Order"
                id="Select Order"
                placeholder='Select Order'
            />
            <select className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[40px] w-[250px] lg:w-[350px]'
                type="text"
                name="Select Data"
                id="Select Data"
                placeholder='Select Data'
            />
            <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[40px] w-[250px] lg:w-[350px]'
                type="text"
                name="Data To Edit"
                id="Data To Edit"
                placeholder='Data To Edit'
            />
            <input className='flex justify-center w-[280px] h-[68px] text-xl my-2 mx-auto mt-[80px] text-[#FFFFFF] rounded-full bg-gradient-to-r from-[#34D399] to-[#34D399] lg:w-[350px]'
                type="button"
                value="Edit"
            />
            <input className='flex justify-center w-[280px] h-[68px] text-xl my-2 mx-auto mt-[40px] text-[#EE8380] rounded-full bg-gradient-to-r from-[#FBDDDC] to-[#FBDDDC] lg:w-[350px]'
                type="button"
                value="Delet"
            />
            </div>
        </main>

    )

}

export default EditChapter