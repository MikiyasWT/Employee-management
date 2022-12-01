import {createSlice} from "@reduxjs/toolkit";


export const sideBarSlice = createSlice({
    name:"showSideBar",
    initialState: {value:true},
    reducers: {
        showSideBar:(state) => {
           state.value =!state.value
        },
    }
})


export const {showSideBar} = sideBarSlice.actions;

export default sideBarSlice.reducer;