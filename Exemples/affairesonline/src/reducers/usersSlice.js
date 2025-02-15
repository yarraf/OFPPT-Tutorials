import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/bd";


const initUsers = users;

const usersSlice = createSlice({
    name:'users',
    initialState:initUsers,
    reducers:{
        inseret:(state,action)=>{
            state.users.push(action.payload);
        }
    }
});

export default usersSlice.reducer;