import React from "react";


const NotAllowed = () => {

    return (

        <main className='flex flex-col md:justify-center'>
            <h1 className='text-[30px] items-center mt-20 p-10 text-white bg-red-800 md:text-center md:p-20 '>Not allowed. This is not your role. Go back, you're lost.</h1>
            <img className='w-[500px] h-[300px] items-center md:items-center md:w-[800px] md:h-[500px]'
                src="../../src/assets/images/Not_allowed.png"
            />
        </main>


    )
}

export default NotAllowed