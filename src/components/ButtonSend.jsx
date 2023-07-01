export default function ButtonSend({ onClick }) {
    return (
        <input onClick={onClick} className='w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#4338CA] to-[#4338CA] hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-550 ..' type="button" value="Send" />
    )
  }