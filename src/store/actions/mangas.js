import { createAction } from "@reduxjs/toolkit";

let saveMangasNews = createAction(
    'saveMangasNews',
    (obj)=>{
        return{
            payload:{
                mangas_news: obj.mangas_news
            }
        }
    }
)

const save_title = createAction('save_title', obj => {
    return { payload: { text: obj.title } }
})


const mangasActions = {
    saveMangasNews,
    save_title
}

export default mangasActions