import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Kelvin",
        age: "20",
        about: "I'm a sofware engineer",
        avaUrl: "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
        themeColor: "#ff9051",
        pending: false,
        error: false,
    },
    reducers: {
        // update: (state, action) => { //state chinh la cac thu trong initialState, action la gtri ben ngoai muon truyen vao
        //     state.name = action.payload.name
        //     state.age = action.payload.age
        //     state.about = action.payload.about
        //     state.avaUrl = action.payload.avaUrl
        //     state.themeColor = action.payload.themeColor
        // },

        updateStart: (state) => {
            state.pending = true //dang load
        },

        updateError: (state) => {
            state.pending = false //load xong roi
            state.error = true
        },
        
        updateSuccess: (state, action) => { 
            state.pending = false
            state.error = false
            state.name = action.payload.name //ko load nua, ko co error, va co the update n~ cai nay
            state.age = action.payload.age
            state.about = action.payload.about
            state.avaUrl = action.payload.avaUrl
            state.themeColor = action.payload.themeColor
        },
    }
})

export const {updateStart, updateError, updateSuccess} = userSlice.actions
// export de lay update ra dung` o file khac de update gtri cua no
export default userSlice.reducer
