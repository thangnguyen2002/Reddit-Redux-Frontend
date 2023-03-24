import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
//no lay n~ cai da dc export trong userSlice.js ra (dat ten userReducer hay gi cx dc)
import postReducer from "./postSlice"

export default configureStore({ // {} de viet js trong
    reducer: {
        user: userReducer, 
        post: postReducer
    }
})