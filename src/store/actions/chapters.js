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
    saveChapters
}

export default chapterActions