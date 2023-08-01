export default function ButtonDelete({ onClick }) {
    return (
        <input onClick={onClick} className='w-5/5 w-437px flex justify-center w-[260px] h-[45px] text-xl my-2 mx-auto hidden:mt-[30px] text-[#EE8380] md:relative md:left-[-320px] md:top-[90px] rounded-full bg-gradient-to-r from-[#FBDDDC] to-[#FBDDDC]'
        type="button"
        value="Delete Account"/>
    )
  }