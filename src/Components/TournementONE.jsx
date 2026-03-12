import ParticipantsList from "./participantsList";
import Badg from "./Badg";
import Inscrire from "./inscription";
import { useState } from "react";
export default function PremierCarte({tournoi}){
 
    const [NbPlacesActuels, setNbPlacesActuels] = useState(tournoi.participantsNombre);


    return(
        <div className="bg-white text-black p-4 rounded-lg shadow-md gap-5">
          <h1 className="text-xl font-bold"> {tournoi.title}</h1>  
          <p> Date:{tournoi.date}</p>
          <p>Sport:{tournoi.sport}</p>
          <p>Status:{tournoi.status}</p>
          
      {/* <ParticipantsList participants={tournoi.participants} /> */}

  

  <Badg status={tournoi.status} />

<Inscrire/>
        </div>   
    );
}