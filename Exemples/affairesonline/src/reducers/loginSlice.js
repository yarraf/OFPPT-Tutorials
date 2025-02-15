import { createSlice } from "@reduxjs/toolkit";


const initAuth = {
    isAuthenticated: false,
user:null};

const loginSlice = createSlice({
    name:"auth",
    initialState:initAuth,
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout:(state)=>{
            state.isAuthenticated = false;
            state.user=null;
        }
    }
});

export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer;