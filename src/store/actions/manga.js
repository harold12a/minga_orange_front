import { createAction } from "@reduxjs/toolkit";

const saveManga= createAction('saveManga', (obj)=>{
    return {
        payload:{
            manga: obj.manga
        }
     }
 })
 const mangaAction= {
    saveManga
 } 
 export default mangaAction