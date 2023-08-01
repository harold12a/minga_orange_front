import { createAction } from "@reduxjs/toolkit";


const saveMangasNews = createAction(
    'saveMangasNews',
    obj=>{
        return{
            payload:{
                mangas_news: obj.mangas_news
            }
        }
    }
)


const saveTitle = createAction('saveTitle', obj => {
    return{
        payload:{
            text: obj.title,        
        }
    }
}) 
const data = createAction('data', obj => {
    return{
        payload:{
            check: obj.check
        }
    }
})

const mangaAction = {saveTitle,data,saveMangasNews}

export default mangaAction

