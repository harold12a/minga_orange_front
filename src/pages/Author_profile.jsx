import { useState } from "react";
import Autorfile from "../components/Author_file";
import Author_mangas from "../components/Author_mangas";
import Switch_old_new from "../components/Switch_old_new";
import { useSelector } from "react-redux"

export default function Author_file() {
    const store = useSelector((store) => store)
    // console.log(store)
    // console.log(store.authors)
    // console.log(store.mangas)
    const [switc, setSwitc] = useState(true)
    return (
        <>
            <div className="min-h-screen w-full pt-[70px] bg-[#EBEBEB] pb-[30px]">
                <Autorfile />
                <hr className="w-4/5 mx-auto border border-black mt-10" />
                {store.mangas.logo ? (null) : (
                    store.manga.all ? (null) : (<Switch_old_new switc={switc} setSwitc={setSwitc} />)
                )} 
                <Switch_old_new switc={switc} setSwitc={setSwitc} />
                <Author_mangas switc={switc}/> 
            </div>
        </>
    )
}
