import {createSlice} from "@reduxjs/toolkit";


export const sideBarSlice = createSlice({
    name:"showSideBar",
    initialState: false,
    reducers: {
        showSideBar:(state) => {
           state =!state
        },
    }
})


export const {showSideBar} = sideBarSlice.actions;

export default sideBarSlice.reducer;