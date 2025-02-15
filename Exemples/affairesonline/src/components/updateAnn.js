
import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { modifier } from "../reducers/annoncesSlice";

const UpdateAnn = ()=>{

const {id} = useParams();
const dispatch = useDispatch();
const navigate = useNavigate();
const regions = useSelector((state)=> state.regions);  
    const annonce = useSelector((state) => 
            state.annonces.annonces.find((x)=> x.id === Number(id)));

    const [texte, setTexte] = useState(annonce ? annonce.texte : "");
    const [regid, setRegId] = useState(annonce ? annonce.regid:0);


    if(!annonce){
        return <h1>Aucune annonce trouvé</h1>
    }
   
//     // Supprimer l'annonce
//   const handleDelete = () => {
//     dispatch(supprimer(annonce.id));
//     navigate("/manage"); // Retour à la liste
//   };

  // Modifier l'annonce
  const handleUpdate = () => {
    if (texte.trim() !== "") {
      dispatch(modifier({ id: annonce.id, texte,regid }));
    }
  };

    return (
        <div>
            <h2>Modifier l'Annonce</h2>
            <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "5px" }}>
            
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
                <option value='0'>Choisir une région</option>
                {regions.map((region) => (
                <option key={region.regid} value={region.regid}>
                    {region.regnom}
                </option>
                ))}
            </select>

            {/* Bouton Ajouter */}
            
            </div>
      
      {/* <button onClick={handleDelete} style={{ color: "red" }}>Supprimer</button> */}
      <br /><br />
      <Link to={`/annonce/${annonce.id}`} style={{ textDecoration: "none", color: "blue", marginRight:"10px" }}>Annuler</Link>
      <button onClick={handleUpdate} style={{ marginRight: "10px" }}>Modifier</button>
      
    </div>
    )
}

export default UpdateAnn;
