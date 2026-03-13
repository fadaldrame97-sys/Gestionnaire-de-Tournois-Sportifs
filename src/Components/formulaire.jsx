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
    return(
 <form onSubmit={Soumettre} className="mt-4 border p-4 rounded">
      <input 
        type="text" 
        placeholder="Nom" 
        value={nom} 
        onChange={(e) => setNom(e.target.value)} 
        className="border p-2 mr-2"
      />
      <input 
        type="text" 
        placeholder="Equipe" 
        value={equipe} 
        onChange={(e) => setEquipe(e.target.value)} 
        className="border p-2 mr-2"
      />
      <input 
        type="text" 
        placeholder="Niveau" 
        value={niveau} 
        onChange={(e) => setNiveau(e.target.value)} 
        className="border p-2 mr-2"
      />

      <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded">
        S'inscrire
      </button>
    </form>




    );
}