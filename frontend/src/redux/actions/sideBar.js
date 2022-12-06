import * as types from "../types"

export function showSideBar( sideBar) {
    console.log(sideBar)
   return({
            type: types.SHOW_SIDE_BAR,
            payload:sideBar
        })
}


// return {
//     type:types.SHOW_SIDE_BAR,
//     payload:sideBar
// }



// export const showSideBar = () => (dispatch) => {
//     api.get('/item/get-items').then((res) => {
//         console.log(res.data)
//         dispatch({
//             type: GET_PRODUCT_LIST,
//             payload: res.data,
//         })
        
//     })
// }