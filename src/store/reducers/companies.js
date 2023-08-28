import { createReducer, current } from "@reduxjs/toolkit";
import companyActions from "../actions/companies";

const { saveProfile, saveCompanies, updateActive } = companyActions

const initialState = {
    profile: {},
    companies: {
        active_true: [],
        active_false: []
    }
}

const companyReducer = createReducer(
    initialState,
    (builder) => builder.addCase(
        saveProfile,
        (state, action) => {
            let newState = {
                ...state,
                profile: action.payload.profile
            }
            return newState
        }
    )
        .addCase(saveCompanies.fulfilled, (state, action) => {
            let newState = {
                ...state,
                companies: {
                    active_true: action.payload.companies.active_true,
                    active_false: action.payload.companies.active_false
                }
            }
            return newState
        })
        .addCase(updateActive.fulfilled, (state, action) => {
            let newState = {
                ...state
            }
            if (action.payload.change === true) {
                console.log(true)
                newState.companies.active_true = state.companies.active_true.filter(each => each._id != action.payload.id),
                newState.companies.active_false = state.companies.active_false.push(action.payload.data)

            } else {
                console.log(false)
                newState.companies.active_false = state.companies.active_false.filter(each => each._id != action.payload.id),
                newState.companies.active_true = state.companies.active_true.push(action.payload.data)
            }
            console.log(newState)
            return newState
        })
)

export default companyReducer