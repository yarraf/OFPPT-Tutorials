import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { modifier, supprimer } from "../reducers/annoncesSlice";

const AnnonceDetail = ()=>{

const {id} = useParams();
const dispatch = useDispatch();
const navigate = useNavigate();
    const annonce = useSelector((state) => 
            state.annonces.annonces.find((x)=> x.id === Number(id)));
    const [texte, setTexte] = useState(annonce ? annonce.texte : "");
    if(!annonce){
        return <h1>Aucune annonce qui a l'identifiant {id}</h1>
    }
   

    // Supprimer l'annonce
  const handleDelete = () => {
    dispatch(supprimer(annonce.id));
    navigate("/manage"); // Retour à la liste
  };

  // Modifier l'annonce
  const handleUpdate = () => {
    if (texte.trim() !== "") {
      dispatch(modifier({ id: annonce.id, texte }));
    }
  };

    return (
        <div>
      <h2>Détail de l'Annonce</h2>
      <table border="1" width="50%" cellPadding="10">
        <tbody>
          <tr>
            <td><strong>ID :</strong></td>
            <td>{annonce.id}</td>
          </tr>
          <tr>
            <td><strong>Texte :</strong></td>
            <td>{annonce.texte}</td>
          </tr>
          <tr>
            <td><strong>Région ID :</strong></td>
            <td>{annonce.regid}</td>
          </tr>
        </tbody>
      </table>
      <br />
      {/* <button onClick={handleUpdate} style={{ marginRight: "10px" }}>Modifier</button> */}
      <Link to={`/upd/${annonce.id}`} style={{ textDecoration: "none", color: "blue" }}>Modifier</Link> | 
      <button onClick={handleDelete} style={{ marginLeft:"10px", color: "red" }}>Supprimer</button>
      <br /><br />
      <Link to="/manage" style={{ textDecoration: "none", color: "blue" }}>Retour à la liste</Link>
    </div>
    )
}

export default AnnonceDetail;