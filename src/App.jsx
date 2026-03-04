
import Header from "./Header";
import { tournamentData } from "./tournament";
import  PremierCarte from "./TournementONE";

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
