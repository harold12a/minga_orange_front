export default function Switch_old_new({ switc, setSwitc }) {
    const changeSwitc =()=>{
        setSwitc(!switc)
        console.log('click');
    }
    return (
        <>
        <div onClick={changeSwitc} className="flex justify-center items-center mt-5">
            <b className="font-roboto text-[#999999] font-bold text-xs mr-5">new</b>
            {switc ? (
                <label className="relative cursor-pointer h-[24px] w-[48px] rounded-full appearance-none bg-[#12b28c]" htmlFor="toggle-switch">
                <input defaultChecked="false" className="sr-only peer" type="checkbox" id="toglle-switch" />
                <span className="w-2/5 h-4/5 bg-white absolute rounded-full left-0.5 top-0.5 peer-checked:left-0 transition-all duration-500" />
            </label>
            ) : (
                <label className="relative cursor-pointer h-[24px] w-[48px] rounded-full appearance-none bg-[#12b28c]" htmlFor="toggle-switch">
                <input defaultChecked="true" className="sr-only peer" type="checkbox" id="toglle-switch" />
                <span className="w-2/5 h-4/5 bg-white absolute rounded-full left-7 top-0.5 peer-checked:right-8 transition-all duration-500" />
            </label>
            )}
            <b className="font-roboto text-[#999999] font-bold text-xs ml-5">old</b>
            
        </div>

        </>
    )
}

