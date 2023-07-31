import { createAction } from "@reduxjs/toolkit";

const save_data = createAction(
    "save_data",
    (obj )=> {
        return {
            payload: {
                order: obj.order,
                title: obj.title
            }
        }
    }
)

const chapterActions ={
    save_data
}

export default chapterActions