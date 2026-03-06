import { useParams } from "react-router-dom";
import Header from "./Header";
import { tournamentData } from "../data/tournament";
import ParticipantsList from "./participantsList";

export default function Details(){

  const { id } = useParams();

  const tournoi = tournamentData.find(t => t.id === Number(id));

  return (
    <div>

      <Header/>

      <h1>{tournoi.title}</h1>
      <p>{tournoi.date}</p>
      <p>{tournoi.sport}</p>

      <ParticipantsList participants={tournoi.participants} />

    </div>
  );
}