import { createSlice } from "@reduxjs/toolkit"; //de tao slice

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [
            {
                title: "",
                description: "",
                tag: 0,
            },
        ],
    },
    reducers: {
        createPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
        }
    }
})

export const {createPost} = postSlice.actions
export default postSlice.reducer
