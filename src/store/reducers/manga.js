import { createReducer, current } from "@reduxjs/toolkit";
import mangaAction from "../actions/manga";
import mangasAction from "../actions/mangas";


const { destroyManga, readManga, updateManga } = mangasAction
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
                        // console.log(element._id);
                        // console.log(action.payload.id_to_delete);
                      return (element._id   !== action.payload.id_to_delete)        
                      })
                }
                // console.log(newState.mangas);
                // console.log(newState.mangasByCategory);
                newState.mangasByCategory = Object.entries(newState.mangas)
                // console.log(newState.mangas);
                // console.log(newState.mangasByCategory);
               
                
                return newState
            }
        )
        .addCase(
            updateManga.fulfilled,
            (state, action)=>{
                // console.log(current(state.mangas));
                console.log(action.payload);
                console.log(action.payload.category_to_map);
                let newState = {
                    ...state,
                    mangas: state.mangas[action.payload.category_to_map].map(each => {
                        if(each._id === action.payload.id_to_update){
                           
                            return action.payload.data   
                        } else{
                            console.log(each);
                            return each
                        }

                    })
                }
                newState.mangasByCategory = Object.entries(newState.mangas)
                console.log(newState);
                return newState
            }
        )
      
)


export default mangaReducer