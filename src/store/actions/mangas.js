import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl"
import header from "../../header"

const saveMangasNews = createAction(
    'saveMangasNews',
    (obj) => {
        return {
            payload: {
                mangas_news: obj.mangas_news
            }
        }
    }
)

const save_title = createAction('save_title', obj => {
    return { payload: { text: obj.title } }
})

const saveMangaDetail = createAction('saveMangaDetail', obj => {
    return { payload: { manga_detail: obj.manga_detail } }
})

const data = createAction('save_checks', obj => {
    return { payload: { checks: obj.checks } }
})
const readManga = createAsyncThunk(
    'readManga', async (obj) => {

        try {
            // console.log("readManga - obj:", obj)
            let mangas = await axios(apiUrl + 'mangas/me', header())
            // console.log(mangas.data.response);
            return {
                mangas: mangas.data.response,
            }

        } catch (error) {
            console.log(error)
            return {
                mangas: [],

            }
        }

    }

)

const destroyManga = createAsyncThunk(
    "destroyMnaga",
    async (obj) => {
        // console.log(obj);
        try {
            // let one = await axios.delete(apiUrl + "mangas/" + obj.manga_id, header());

            // console.log(one.data.response);
            return {
                id_to_delete: obj.manga_id, category_to_filter: obj.category
            };
        } catch (error) {
            console.error("Error al realizar la petición:", error);
        }

    }
)

const updateManga = createAsyncThunk(
    'updateManga', 
    async (obj)=>{
        try {
             let one = await axios.put(apiUrl + "mangas/" + obj.manga_id, obj.data, header());
             console.log(one.data.response);
             console.log(obj.currentCategory)
            return {
               
                id_to_update: one.data.response._id, category_to_map: obj.currentCategory, data: one.data.response
            } 
        } catch (error) {
            console.error("Error ", error)
        }
    }
)


const mangasActions = {
    saveMangasNews,
    save_title,
    saveMangaDetail,
    data,
    readManga,
    destroyManga,
    updateManga
}

export default mangasActions