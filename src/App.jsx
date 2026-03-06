
import Header from "./Components/Header";
import { tournamentData } from "./data/tournament";
import  PremierCarte from "./Components/TournementONE";

function App() {
 

  return (
   <div>
    <Header/>

    <div className="p-6 grid grid-cols-1 gap-4">
        {tournamentData.map((tournoi) => (
          <PremierCarte
            key={tournoi.id}
            tournoi={tournoi}
          />
        ))}
      </div>

   </div>
  )
}

export default App
