import React from "react";


const NotAllowed = () => {

    return (

        <main className='flex flex-col md:justify-center'>
            <h1 className='text-[30px] items-center -mt-7 p-24 text-white bg-blue-800 h-full md:text-center lg:p-20 lg:-mt-7 '>Not allowed. This is not your role. Go back, you're lost.</h1>
            <img className='w-[500px] h-full items-center md:items-center md:w-[800px] md:h-full'
                src="../../src/assets/images/Not_allowed.png"
            />
        </main>


    )
}

export default NotAllowed