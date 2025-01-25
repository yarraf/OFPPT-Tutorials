import { LOGIN } from "../actions/types"


export const loginStateReducer = (state={}, action)=>{
    switch(action.type){

        case LOGIN:
            return{};
            default:
                return state;
    }
}