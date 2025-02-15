import React, { useState } from "react";
import { useSelector } from "react-redux";


const AnnonceByReg = () =>{

   const annonces = useSelector((state)=> state.annonces.annonces);
       const regions = useSelector((state)=> state.regions);
       const [regId,setRegId] = useState(0);
       

       console.log(JSON.stringify(annonces));
       console.log(JSON.stringify(regId));
   // Filtrer les annonces par région sélectionnée
   const annoncesFiltrees = annonces.filter((annonce) => annonce.regid === regId);
   
       return (
           <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
         <h2>Filtrer les annonces par région</h2>
   
         {/* Sélecteur de région */}
         <select onChange={(e) => setRegId(Number(e.target.value))} value={regId} style={{ padding: "8px" }}>
         <option value='0'>Choisir une région</option>
           {regions.map((region) => (
             <option key={region.regid} value={region.regid}>
               {region.regnom}
             </option>
           ))}
         </select>
   
         {/* Liste des annonces filtrées */}
         <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
           {annoncesFiltrees.length > 0 ? (
             annoncesFiltrees.map((annonce) => (
               <li key={annonce.id} style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                 {annonce.texte}
               </li>
             ))
           ) : (
             <p>Aucune annonce pour cette région.</p>
           )}
         </ul>
       </div>
       )
}

export default AnnonceByReg;