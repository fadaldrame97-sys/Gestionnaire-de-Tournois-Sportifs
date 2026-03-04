export default function PremierCarte({tournoi}){
    return(
        <div className="bg-white text-black p-4 rounded-lg shadow-md">
          <h1 className="text-xl font-bold"> {tournoi.title}</h1>  
          <p> Date:{tournoi.date}</p>
          <p>Sport:{tournoi.sport}</p>
          <p>Status:{tournoi.status}</p>
        </div>
    );
}