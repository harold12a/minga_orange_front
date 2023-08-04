import { useEffect} from 'react';
import apiUrl from '../apiUrl';
import axios from 'axios';
import ButtonManage from './ButtonManage';
import { useDispatch, useSelector } from 'react-redux';
import mangasActions from '../store/actions/mangas'
import { Link as Anchor } from 'react-router-dom';

const { saveMangasNews } = mangasActions

export default function Author_mangas({ switc }) {

    const dispatch = useDispatch()
    const store = useSelector(store => store)
    const logoMangas = store.mangas.logo
    const allMangas = store.mangas.all
    const newMangas = store.mangas.new
    const oldMangas = store.mangas.old

    useEffect(
        () => {
            if (!logoMangas && (allMangas?.length === 0) && (oldMangas?.length === 0) && (newMangas?.length === 0)) {
                let headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` } }
                axios(apiUrl + "mangas/news", headers)
                    .then(res => {
                        if (res.data.response.logo) {
                            dispatch(saveMangasNews({
                                mangas_news: {
                                    logo: res.data.response.logo
                                }
                            }))
                        } else if (res.data.response.all) {
                            dispatch(saveMangasNews({
                                mangas_news: {
                                    all: res.data.response.all
                                }
                            }))
                        } else {
                            dispatch(saveMangasNews({
                                mangas_news: {
                                    new: res.data.response.new,
                                    old: res.data.response.old
                                }
                            }))
                        }
                    })
                    .catch(err => console.log(err))
            }

        }, []
    )

    return (
        <>
            {(allMangas?.length !== 0) ?
                <div className='flex flex-col items-center '>
                    <div className="grid max-[400px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-5 w-full md:w-[70%] mt-2 justify-items-center">
                        {allMangas?.map((each, index) => (
                            <div key={index}>
                                <Anchor to={'/manga/' + each._id +'/1'}>
                                    <img className="w-[174px] h-[211px] object-cover rounded-2xl transition hover:scale-110 cursor-pointer" src={each?.cover_photo} />
                                </Anchor>
                                <h1 className='font-roboto font-normal text-lg mt-2'>{each?.title}</h1>
                            </div>
                        ))}
                    </div>

                </div> : ""}
            {(switc) ?
                <div className='flex flex-col items-center '>
                    <div className="grid max-[400px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-5 w-full md:w-[70%] mt-10 justify-items-center ">
                        {newMangas?.map((each, index) => (
                            <div key={index}>
                                <Anchor to={'/manga/'+each._id+'/1'}>
                                    <img  className="w-[174px] h-[211px] object-cover rounded-2xl transition hover:scale-110 cursor-pointer" src={each?.cover_photo} />
                                </Anchor>
                                <h1 className='font-roboto font-normal text-lg mt-3'>{each?.title}</h1>
                            </div>
                        ))}
                    </div>

                </div> : <div className='flex flex-col items-center '>
                    <div className="grid max-[400px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-5 w-full md:w-[70%] mt-10 justify-items-center ">
                        {oldMangas?.map((each, index) => (
                            <div key={index}>
                                <Anchor to={'/manga/' + each._id +'/1'}>
                                    <img  className="w-[174px] h-[211px] object-cover rounded-2xl transition hover:scale-110 cursor-pointer" src={each?.cover_photo} />
                                </Anchor>
                                <h1 className='font-roboto font-normal text-lg mt-3'>{each?.title}</h1>
                            </div>
                        ))}
                    </div>

                </div>}
            {logoMangas ? <div className='flex flex-col items-center '>
                <img className="mt-10" src={logoMangas} />

            </div> : ""}
            <ButtonManage />

        </>
    )
}