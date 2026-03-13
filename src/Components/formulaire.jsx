import { useState } from "react";
export default function Formulaire(){

    const [Nom, setNom]=useState("")
    const [Equipe,setEquipe]=useState("")
    const [Niveau,setNiveau]=useState("")


    function Soumettre(e){
        e.preventDefault();

        const nouveauParticipant= {
            id: Date.now(),
            name:Nom,
            Equipe:Equipe,
            Niveau:Niveau
        };
    }

    function AjouterUnParticipant(){

   setNom("");
   setEquipe("");
   setNiveau("");


    }
    return();
}