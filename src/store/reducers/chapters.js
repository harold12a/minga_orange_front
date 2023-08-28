import { createAsyncThunk, createReducer, current } from "@reduxjs/toolkit";
import chapterActions from "../actions/chapters";

const { save_data, saveChapters, updateChapter, destroyChapter } = chapterActions
const initialState = {
    text: "",
    title: "",
    order: 0,
    cover_photo: "",
    chapters: []
}

const chapterReducer = createReducer(initialState, builder => builder.addCase(save_data, (state, action) => {
    const newState = {
        ...state,
        title: action.payload.title,
        order: action.payload.order,
    }
    return newState
})
    .addCase(saveChapters.fulfilled, (state, action) => {
        const newState = {
            ...state,
            title: action.payload.title,
            cover_photo: action.payload.cover_photo,
            order: action.payload.order,
            chapters: action.payload.chapters
        }
        return newState
    })
    .addCase(updateChapter.fulfilled, (state, action) => {
        let newState = {
            ...state,
            chapter_by_cat: current(state).chapter_by_cat.map((each) => {
                if (each[0] === action.payload.category) {
                    let filtered = each[1].map((chapters) => {
                        if (chapters._id === action.payload.id) {
                            return action.payload.res;
                        }
                        return chapters;
                    });
                    return [each[0], filtered];
                }
                return each;
            }),
        };
        console.log(newState)
        return newState
    })
    .addCase(destroyChapter.fulfilled, (state, action) => {
        let newState = {
            ...state,
            chapter_by_cat: state.chapter_by_cat.map((each) => {
                if (each[0] === action.payload.category) {
                    let filtered = each[1].filter(
                        (chapters) => chapters._id !== action.payload.id
                    );
                    return [each[0], filtered];
                }
                return each
            }),
        };
        return newState
    })

)
export default chapterReducer
