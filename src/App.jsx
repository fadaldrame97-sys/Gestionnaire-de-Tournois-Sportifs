import Details from "./Components/Détails";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/tournament/:id" element={<Details/>}/>
  </Routes>
</BrowserRouter>
   </div>

  )
}

export default App
