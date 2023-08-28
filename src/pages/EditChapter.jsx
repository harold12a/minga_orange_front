import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import chapterActions from "../store/actions/chapters";
import { useDispatch, useSelector } from "react-redux";
import BtnDeletChapter from "../components/BtnDeletChapter";
import BtnEditChapter from "../components/BtnEditChapter";



const EditChapter = () => {

    const { saveChapters } = chapterActions
    const dispatch = useDispatch()
    const chapters = useSelector(store => store.chapters.chapters);
    console.log(chapters)
    //const title = useSelector(store => store.chapters.tile)
    //const order = useSelector(store => store.chapters.order)
    //const photo = useSelector(store => store.chapters.cover_photo)
    //const { chapter, setChapter } = useState()
    const { manga_id } = useParams()
    const [selectedId, setSelectedId] = useState()
    const [selectedChapter, setSelectedChapter] = useState()
    const [selectProperty, setSelectProperty] = useState("")

    useEffect(
        () => {
            dispatch(saveChapters({ manga_id }))
        }, [dispatch, manga_id]);

    useEffect(() => {
        if (selectedId) {
            const chapter = chapters.find((chapter) => chapter._id === selectedId)
            setSelectedChapter(chapter);
            setSelectProperty("")
        } else {
            setSelectedChapter(null)
            setSelectProperty("")
        } [selectedId, chapters]
    })

    const changeSelect = (event) => {
        setSelectedId(event.target.value)
    }
    const dataSelect = (event) => {
        setSelectProperty(event.target.value)
    }
    return (
        <main className='bg-slate-200 flex absolute w-full h-full items-center justify-between '>
            <div className='hidden xl:block'>
                <from className='flex flex-col items-center w-full md:m-0 md:w-full lg:min-h-screen lg:absolute lg:left-10 lg:w-[50%] lg:m-2 lg:top-[1px]'>
                    <h1 className='text-[40px] text-center mt-[160px] md:w-[350px]'>Edit Chapter</h1>
                    <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[80px] w-[250px] lg:w-[350px]'
                        type="text"
                        id="title"
                        placeholder='name Manga'
                    />
                    <select
                        Value={selectedId}
                        onChange={changeSelect}
                        className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[40px] w-[250px] lg:w-[350px]'
                        name="chapters"
                        id="selectedChapter">
                        <option value="">select chapter</option>
                        {chapters.map(chapter => (
                            <option
                                key={chapter._id}
                                value={chapter._id}>
                                {chapter.title}
                            </option>
                        ))}
                    </select>
                    {selectedChapter && (
                        <select
                            className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[40px] w-[250px] lg:w-[350px]'
                            Value={selectProperty}
                            onChange={dataSelect}
                            name="properties"
                            id="selectPropet">
                            <option disabled value="">
                                select data
                            </option>
                            {Object.keys(selectedChapter)
                                .filter(property => ["title", "order", "cover_photo"].includes(property))
                                .map(property => (
                                    <option
                                        key={property}
                                        value={property}>
                                        {property}
                                    </option>
                                ))}
                        </select>
                    )}

                    <input className='flex justify-center border-b border-gray-400 bg-slate-200 my-2 mx-auto mt-[40px] w-[250px] lg:w-[350px]'
                        type="text"
                        id="pages"
                        placeholder='Data To Edit'
                    />
                    <BtnEditChapter />
                    <BtnDeletChapter />
                </from>
            </div>
            <div>
                {selectedChapter && (
                    <div className="">
                        <p>{selectedChapter.order} {selectedChapter.title}</p>
                        <img
                            className='lg:absolute lg:top-[256px] lg:right-[200px] lg:h-[544px] lg:w-[600px]'
                            src={selectedChapter.photo}
                        />
                    </div>
                )}
            </div>
        </main>

    )

}

export default EditChapter