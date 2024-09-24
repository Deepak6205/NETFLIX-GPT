import { createSlice } from "@reduxjs/toolkit";

const conficSlice = createSlice({
    name: "config",
    initialState:{
        lang: "en",
    },
    reducers:{
        changeLanguage: (state,action) =>{
            state.lang = action.payload;
        }
    }
})

export const {changeLanguage} = conficSlice.actions;
export default conficSlice.reducer;