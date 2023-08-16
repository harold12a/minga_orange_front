import { createReducer } from "@reduxjs/toolkit";
import mangaAction from "../actions/manga";
import mangasAction from "../actions/mangas";

const { destroyManga, readManga } = mangasAction
const { saveManga } = mangaAction

const initialState = {
    manga: {},
    mangas: [], //comments es un array de objetos con 4 ids
    next: null,
    prev: null,
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
                next: action.payload.next,
                prev: action.payload.prev,
            }
            return newState
        }
    ).addCase(
            destroyManga.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    mangas: state.mangas.filter(each =>
                        each._id !== action.payload.id_to_delete
                    )
                }
                return newState
            }
        )
)
export default mangaReducer