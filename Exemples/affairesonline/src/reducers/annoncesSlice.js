import { createSlice } from "@reduxjs/toolkit";
import { annonces } from "../data/bd";


const initAnnonces = {
    annonces:annonces
};

const annoncesSlice = createSlice({
    name:'annonces',
    initialState:initAnnonces,
    reducers:{
        inserer:(state,action)=>{
            console.log('check slice' + JSON.stringify(state));
            state.annonces.push(action.payload);
        },
        modifier:(state,action)=>{
            const annonce = state.annonces.find((x)=> x.id === action.payload.id);
            if(annonce) annonce.texte = action.payload.texte;
        },
        supprimer:(state,action)=>{
            // state.annonces = state.annonces.filter((a) => a.id !== action.payload);
            const index = state.annonces.findIndex((x) => x.id === action.payload);
            if (index !== -1) {
              state.annonces.splice(index, 1); // Suppression physique
            }
        }
    }
});

export const {inserer,modifier,supprimer} = annoncesSlice.actions;
export default annoncesSlice.reducer;