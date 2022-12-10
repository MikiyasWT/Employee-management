import * as types from "../types"

export function showSideBar( sideBar) {
    
   return({
            type: types.SHOW_SIDE_BAR,
            payload:sideBar
        })
}


