import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../data/bd";


const initCategories = categories;

const categoriesSlice = createSlice({
    name:'categories',
    initialState:initCategories,
    reducers:{
        inseret:(state,action)=>{
            state.regions.push(action.payload);
        }
    }
});

// export const {insert} = categoriesSlice.actions;
export default categoriesSlice.reducer;