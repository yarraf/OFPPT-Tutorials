import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const AdminAnn = () =>{

    const annonces = useSelector((state)=> state.annonces.annonces)


return (

    <div>
        <h2>Liste des Annonces</h2>
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Texte</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {annonces.map((annonce) => (
            <tr key={annonce.id}>
              <td>{annonce.id}</td>
              <td>{annonce.texte}</td>
              <td>
                <Link to={`/annonce/${annonce.id}`} style={{ textDecoration: "none", color: "blue" }}>
                 afficher le détail de l'annonce
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);


}


export default AdminAnn;