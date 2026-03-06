import Header from "./Header";
import { tournamentData } from "../data/tournament";
import PremierCarte from "./TournementONE";
import { Link } from "react-router-dom";
export default function Home(){
    return(
        <div>
         <Header/>
         <div className="p-6 grid grid-cols-3 gap-2">
         {tournamentData.map((tournoi)=>(
             <Link key={tournoi.id} to={`/tournament/${tournoi.id}`}>
            <PremierCarte tournoi={tournoi} />
          </Link>
         ))}

         </div>

        </div>
    );
}