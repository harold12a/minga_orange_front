import { createAction } from "@reduxjs/toolkit";
import { defaults } from "autoprefixer";

let saveProfile = createAction (
    'saveProfile',
    (obj) => {
        return {
            payload:{
                profile: obj.profile
            }
        }
    }
)

const authorActions = {
    saveProfile
}

export default authorActions