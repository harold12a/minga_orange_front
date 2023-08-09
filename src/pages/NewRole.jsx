import React from "react";
import { Link as Anchor } from "react-router-dom";

export default function NewRole() {

  return (
    <main className="flex w-full min-h-screen items-center justify-between">
      <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
      <p className="font-Roboto text-[#4338CA] text-[12px] mb-[12px] text-center p-2">
          Change role to
        </p>
      <img src="../../src/assets/images/Frame 34648.png" alt="frame" className="w-[160px]" />
   
     <div>
        <p className="font-bold text-[#4338CA] text-[12px] mt-[12px] text-center p-2 border-2 border-black rounded-lg px-16 py-4">
             Join as an Author!{" "}
             <Anchor to='/singin' className="">
                  <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label for="horizontal-list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
             </Anchor> 
            <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
            <p class="mt-1 text-sm font-medium text-[#4338CA] md:mt-2">I´m a reader writing a manga </p>
            <span class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">+5</span><span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
              <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png" alt=""/>
           </span>
           <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
              <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png" alt=""/>
           </span>
           <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
             <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png" alt=""/>
           </span>
      </div>  
        </p>
      </div>
      <p className="font-bold text-[#4338CA] text-[12px] mt-[30px] text-center p-2 border-2 border-black rounded-lg px-1 py-4">
             Join as a Company!{" "}
             <Anchor to='/singin' className="">
                  <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label for="horizontal-list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
             </Anchor> 
            <div class="flex flex-row-reverse md:mt-2 lg:mt-0 px-2">
            <p class="mt-1 text-sm font-medium text-[#4338CA] md:mt-2">I´m a company and I want to publish my comics </p>
            <span class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">+5</span><span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
              <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png" alt=""/>
           </span>
           <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
              <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png" alt=""/>
           </span>
           <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
             <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png" alt=""/>
           </span>
      </div>  
        </p>
      </div>      
      
      <img
        className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover"
        src="../../src/assets/images/NewRole.png"
        alt="register"
      />
    </main>
  );
};
