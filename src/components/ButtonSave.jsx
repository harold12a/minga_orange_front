export default function ButtonSave({ onClick }) {
    return (
        <input onClick={onClick} className='w-5/5 w-437px flex justify-center w-[260px] h-[45px] text-xl my-2 mx-auto hidden:mt-[30px] md:relative md:left-[-320px] md:top-[90px] text-white rounded-full bg-gradient-to-r from-[#34D399] to-[#32D399]'
        type="button"
        value="Save"/>
    )
  }