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
            console.log(obj);
            let manga = await axios(apiUrl + `mangas?page=${obj.page}&category_id=${obj.checks.join(",")}` , header())
            console.log(manga.data.response);

            return {
                mangas : manga.data.response,
                next : manga.data.response,
                prev : manga.data.response
            }

        } catch (error) {
            console.log(error)
            return{
                mangas : [],
                next: null,
                prev: null
            }
        }

    }

)

const destroyManga = createAsyncThunk(
    "destroyMnaga",
    async (obj) => {

        try {
            let one = await axios.delete(apiUrl + "mangas/" + obj.manga_id, header());
            console.log(one.data.response);
            return {
                id_to_delete: one.data.response
            };
        } catch (error) {
            console.error("Error al realizar la petición:", error);
        }
        
    }
)


const mangasActions = {
    saveMangasNews,
    save_title,
    saveMangaDetail,
    data,
    readManga,
    destroyManga
}

export default mangasActions