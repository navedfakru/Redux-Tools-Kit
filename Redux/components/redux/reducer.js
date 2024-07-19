import { Add_To_Cart } from "./constants";

const initialState = [];

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      return [
        ...state,
        action.data
      ]
    
    default: 
      return state
  }
}