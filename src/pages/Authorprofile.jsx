import Autorfile from "../components/Author_file";
// import Author_mangas from "../components/Author_mangas";
import Switch_old_new from "../components/Switch_old_new";

export default function Author_file() {
    
    return (
        <>
            <div className="min-h-screen w-full pt-[70px] bg-[#EBEBEB] pb-[30px]">
                <Autorfile />
                <hr className="w-4/5 mx-auto border border-black mt-10" />
                <Switch_old_new />
                {/* <Author_mangas/> */} 
            </div>
        </>
    )
}
