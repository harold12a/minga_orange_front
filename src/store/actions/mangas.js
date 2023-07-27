import { createAction } from "@reduxjs/toolkit";

const saveTitle = createAction('saveTitle', obj => {
    return{
        payload:{
            text: obj.title,
          
          
        }
    }

}) 

const saveButton = createAction('saveButton', obj => {
    return{
        payload:{
            check: obj.check
        }
    }
})

const mangaAction = {saveTitle,saveButton}

export default mangaAction