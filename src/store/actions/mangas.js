import { createAction } from "@reduxjs/toolkit";

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

const mangaAction = {saveTitle,data}

export default mangaAction