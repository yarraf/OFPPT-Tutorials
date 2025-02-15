import React from 'react';
import { useSelector } from 'react-redux';

const Annonces = ()=>{

    const annonces = useSelector((state) => state.annonces)
   console.log(annonces);
 return (
    <div>
        <h1>Liste annonces</h1>
        <ul>
           {
            annonces.map((annonce)=>(
                <li key={annonce.id}>{annonce.texte}</li>
            ))
           }
        </ul>
    </div>
 );
}


export default Annonces;