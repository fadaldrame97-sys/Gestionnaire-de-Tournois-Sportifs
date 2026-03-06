import ParticipantsList from "./participantsList";
export default function PremierCarte({tournoi}){

let statutClors="";

   if(tournoi.status==="On Going"){
    statutClors="bg-green-100 text-green-600";
   }
else if(tournoi.status==="Upcoming"){
    statutClors="bg-blue-200 text-blue-600"; 
}
else{  statutClors="bg-yellow-200 text-black"; 
} 

    return(
        <div className="bg-white text-black p-4 rounded-lg shadow-md">
          <h1 className="text-xl font-bold"> {tournoi.title}</h1>  
          <p> Date:{tournoi.date}</p>
          <p>Sport:{tournoi.sport}</p>
          <p>Status:{tournoi.status}</p>
           <span className={`px-3 py-1 rounded-full text-xs ${statutClors}`}>
        {tournoi.status}
      </span>
      <ParticipantsList participants={tournoi.participants} />
        </div>
    );
}