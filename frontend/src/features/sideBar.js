import {createSlice} from "@reduxjs/toolkit";


export const sideBarSlice = createSlice({
    name:"showSideBar",
    initialState: {value:false},
    reducers: {
        showSideBar:(state) => {
           state.value =!state.value
        },
    }
})


export const {showSideBar} = sideBarSlice.actions;

export default sideBarSlice.reducer;