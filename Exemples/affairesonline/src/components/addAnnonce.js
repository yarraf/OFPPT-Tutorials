import React, { useState } from 'react';
import { inserer } from '../reducers/annoncesSlice';
import { useDispatch, useSelector } from "react-redux";

const DiffuserAnn = () => {
    const [texte, setTexte] = useState("");
    const [regid, setRegId] = useState();

    const dispatch = useDispatch();
    const regions = useSelector((state) => state.regions);

    const handleAjouter = () => {
        if (texte.trim() !== "") {
          dispatch(inserer({texte, regid,id:Math.floor(Math.random() * 1000) }));
          setTexte(""); // Réinitialiser le champ après ajout
        }
      };

    return (

     <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "5px" }}>
      <h2>Ajouter une annonce</h2>
      
      {/* Champ de texte */}
      <input
        type="text"
        placeholder="Texte de l'annonce"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      
      {/* Sélecteur de région */}
      <select
        onChange={(e) => setRegId(Number(e.target.value))}
        value={regid}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        {regions.map((region) => (
          <option key={region.regid} value={region.regid}>
            {region.regnom}
          </option>
        ))}
      </select>

      {/* Bouton Ajouter */}
      <button onClick={handleAjouter} style={{ padding: "10px", background: "green", color: "white", width: "100%" }}>
        Ajouter l'annonce
      </button>
    </div>
    );
}

export default DiffuserAnn;