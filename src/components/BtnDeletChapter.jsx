export default function BtnDeletChapter({ onClick }) {
    return (
        <input
            onClick={onClick}
            className='flex justify-center w-[280px] h-[68px] text-xl my-2 mx-auto mt-[40px] text-[#EE8380] rounded-full bg-gradient-to-r from-[#FBDDDC] to-[#FBDDDC] lg:w-[350px]'
            type="button"
            value="Delete"

        />
    )
}