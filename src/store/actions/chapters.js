import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl"
import header from "../../header";

let saveChapters = createAsyncThunk('saveChapters', async (obj) => {
    //agregar estructura try catch
    try {
        let res = await axios(apiUrl + "chapters/me?manga_id=" + obj.manga_id, header())
        console.log(res.data.response)
        return {
            title: res.data.response[0].title,
            cover_photo: res.data.response[0].cover_photo,
            order: res.data.response[0].order,
            chapters: res.data.response
        }
    } catch (error) {
        console.log(error)
    }

});

let updateChapter = createAsyncThunk(
    'updateChapter',
    async(id, data, category) =>{
        try {
            let res = await axios.put(`${apiUrl}chapters/${id}`,data, header())
            return{
             id, res: res.data.response, 
             category
            }
        } catch (error) {
            console.log(error)
            return{id:""}
        }
    }
)

const destroyChapter = createAsyncThunk(
    "destroyChapter",
    async ({id, category}) =>{
        try {
            await axios.delete(`${apiUrl}/chapters/${id}`,header());
            return {id, category};
        } catch (error) {
            console.log(error);
            return{ id: "" }
        }
    }

)

const save_data = createAction(
    "save_data",
    (obj) => {
        return {
            payload: {
                order: obj.order,
                title: obj.title
            }
        }
    }
)

const chapterActions = {
    save_data,
    saveChapters,
    updateChapter,
    destroyChapter
}

export default chapterActions