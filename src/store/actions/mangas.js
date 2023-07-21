import { createAction } from "@reduxjs/toolkit";

const saveTitle = createAction('saveTitle', obj => {
    return{
        payload:{
            text: obj.title
        }
    }

}) 

const mangaAction = {saveTitle}

export default mangaAction