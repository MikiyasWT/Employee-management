import * as types from "../types"

export function showEditSideBar (editSideBar,employeeInfo) {
    
    return({
        type:types.SHOW_EDIT_SIDE_BAR,
        payload:{editSideBar,employeeInfo}
    })
}