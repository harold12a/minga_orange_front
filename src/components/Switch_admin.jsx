import React from 'react'

export default function Switch_admin() {
  return (
    <>
    <div className="flex justify-center items-center mt-5 border border-gray-300 rounded-full">
        (
        <label className="relative cursor-pointer h-[35px] w-[320px] rounded-full appearance-none bg-[#EBEBEB] " htmlFor="toggle-switch">
            <input defaultChecked="true" className="sr-only peer" type="checkbox" id="toglle-switch" />
            <span className="w-1/2 h-full bg-gradient-to-r from-[#4338CA] to-[#4338CA] absolute rounded-full peer-checked:left-0 transition-all duration-500" />
            <span className="absolute left-14 top-1.5 peer-checked:text-white transition-all">Companies</span>
            <span className="absolute right-14 top-1.5">Authors</span>


        </label>
    ) : (
        <label className="relative cursor-pointer h-[35px] w-[320px] rounded-full appearance-none bg-[#EBEBEB]" htmlFor="toggle-switch">
            <input defaultChecked="false" className="sr-only peer" type="checkbox" id="toglle-switch" />
            <span className="w-1/2 h-full bg-gradient-to-r from-[#4338CA] to-[#4338CA] absolute rounded-full peer-checked:left-[160px] transition-all duration-500" />
            <span className="absolute left-14 top-1.5">companies</span>
            <span className="absolute right-12 top-1.5 peer-checked:text-white transition-all">Authors</span>
        </label>
    )
    
</div>
    </>
  )
}
