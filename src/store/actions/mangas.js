import { createAction } from "@reduxjs/toolkit";

let saveMangasNews = createAction(
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
            checks: obj.checks
        }
    }
})


const mangasActions = {
    saveMangasNews,
    saveTitle,
    data,
}

export default mangasActions
