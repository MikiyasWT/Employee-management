import * as type from '../types';



const initialState = {
 sideBar:false,
}

 

export default function sideBar(state=initialState, action) {
  switch (action.type) {
    case type.SHOW_SIDE_BAR:
      return {
        ...state,
        sideBar: !state.sideBar
      }
    default:
      return state;
  }
}