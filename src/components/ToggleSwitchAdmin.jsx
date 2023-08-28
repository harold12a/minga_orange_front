export default function ToggleSwitchAdmin({show, setShow}) {

  return (
    <div className="flex justify-center items-center w-[90%]">
      <label htmlFor="Toggle3" className="inline-flex h-[53px] w-[80%] items-center rounded-md cursor-pointer dark:text-gray-800">
        <input id="Toggle3" type="checkbox" className="hidden peer" onClick={()=>setShow(!show)}/>
          <span className="w-[50vw] px-4 py-2 rounded-tl-md text-[20px] text-center dark:bg-[#4338CA] peer-checked:dark:bg-gray-100 dark:text-white peer-checked:dark:text-[#4338CA]">Companies</span>
          <span className="w-[50vw] px-4 py-2 rounded-tr-md text-[20px] text-center dark:bg-gray-100 peer-checked:dark:bg-[#4338CA]  dark:text-[#4338CA] peer-checked:dark:text-white">Authors</span>
      </label>
    </div>
  )
}
