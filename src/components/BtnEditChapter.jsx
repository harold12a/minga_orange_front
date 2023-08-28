export default function BtnEditChapter({ onClick }) {
    return (
        <input
            onClick={onClick}
            className='flex justify-center w-[280px] h-[68px] text-xl my-2 mx-auto mt-[80px] text-[#FFFFFF] rounded-full bg-gradient-to-r from-[#34D399] to-[#34D399] lg:w-[350px]'
            type="button"
            value="Edit"
        />
    )
}