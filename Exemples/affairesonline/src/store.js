import { configureStore, createAction, createReducer, createSlice, getde } from "@reduxjs/toolkit";
import { annonces, categories, regions, users } from "./data/bd";
import annonceReducer from './reducers/annoncesSlice';
import regionsReducer from './reducers/regionsSlice';
import usersReducer from './reducers/usersSlice';
import categoriesReducer from './reducers/categoriesSlice';
import loginReducer from './reducers/loginSlice';

const store  = configureStore({
    reducer:{
        annonces :annonceReducer,
        regions : regionsReducer,
        users : usersReducer,
        categories : categoriesReducer,
        auth : loginReducer
    }
});

export default store;