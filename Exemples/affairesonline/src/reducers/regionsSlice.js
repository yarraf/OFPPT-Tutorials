import { createSlice } from "@reduxjs/toolkit";
import { regions } from "../data/bd";


const initRegions = regions;

const regionsSlice = createSlice({
    name:'regions',
    initialState:initRegions,
    reducers:{
        inseret:(state,action)=>{
            state.regions.push(action.payload);
        }
    }
});

// export const {insert} = regionsSlice.actions;
export default regionsSlice.reducer;