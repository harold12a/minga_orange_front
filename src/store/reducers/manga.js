import { createReducer } from "@reduxjs/toolkit";
import mangaAction from "../actions/manga";
import mangasAction from "../actions/mangas";

const { destroyManga, readManga } = mangasAction
const { saveManga } = mangaAction

const initialState = {
    manga: {},
    mangas: {}, //manga es un objeto con los array x categoria
    mangasByCategory :[]
}

const mangaReducer = createReducer(
    initialState,
    builder => builder.addCase(
        saveManga,
        (state, action) => {
            const newState = {
                ...state,
                manga: action.payload.manga
            }
            return newState
        }
    ).addCase(
        readManga.fulfilled,
        (state, action) => {
            let newState = {
                ...state,
                mangas: action.payload.mangas,    
                mangasByCategory : Object.entries(action.payload.mangas) 
            }
            // console.log(newState);
            return newState
        }
    ).addCase(
            destroyManga.fulfilled,
            (state, action) => {
                let newState = {
                    ...state, 
                    mangas:  state.mangas[action.payload.category_to_filter].filter(element =>{
                        console.log(element._id);
                        console.log(action.payload.id_to_delete);
                      return (element._id   !== action.payload.id_to_delete)        
                      })
                }
                console.log(newState.mangas);
                console.log(newState.mangasByCategory);
                newState.mangasByCategory = Object.entries(newState.mangas)
                console.log(newState.mangas);
                console.log(newState.mangasByCategory);
               
                
                return newState
            }
        )
)
export default mangaReducer