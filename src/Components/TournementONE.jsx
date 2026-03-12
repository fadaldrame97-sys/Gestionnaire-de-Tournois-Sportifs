import ParticipantsList from "./participantsList";
import Badg from "./Badg";
import Inscrire from "./inscription";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PremierCarte({tournoi}){
 
    const [NbPlacesActuels, setNbPlacesActuels] = useState(tournoi.participantsNombre);


    return(
        <div className="bg-white text-black p-4 rounded-lg shadow-md gap-5">
         <Link to={`/tournament/${tournoi.id}`}>
          {tournoi.title}
        </Link> 
          <p> Date:{tournoi.date}</p>
          <p>Sport:{tournoi.sport}</p>
          <p>Status:{tournoi.status}</p>
          
         <p>Participants : {NbPlacesActuels} / {tournoi.maxParticipants}</p>
          
      {/* <ParticipantsList participants={tournoi.participants} /> */}


  

  <Badg status={tournoi.status} />

<Inscrire   Ajouter={()=>setNbPlacesActuels(NbPlacesActuels+1)} Retire={()=>setNbPlacesActuels(NbPlacesActuels-1)}/>
        </div>   
    );
}