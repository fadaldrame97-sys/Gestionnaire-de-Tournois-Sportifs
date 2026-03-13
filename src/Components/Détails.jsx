import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { tournamentData } from "../data/tournament";
import ParticipantsList from "./ParticipantsList";

export default function Details() {

  const { id } = useParams();
  const tournoi = tournamentData.find(t => t.id === id);
 const [participants, setParticipants] = useState(tournoi.participants);

  function ajouterParticipant(nouveauParticipant) {
    setParticipants([...participants, nouveauParticipant]);
  }
  if (!tournoi) {
    return <p className="p-6 text-center">Tournoi introuvable</p>;
  }

  
  let participantsContent;

  if (tournoi.participants.length === 0) {
    participantsContent = (
      <p className="text-gray-500">Aucun participant pour ce tournoi</p>
    );
  } else {
    participantsContent = (
      <ul className="space-y-3">
        {tournoi.participants.map((p) => {

          let statusColor;

          if (p.status === "Confirmed") {
            statusColor = "text-green-600";
          } else {
            statusColor = "text-orange-500";
          }

          return (
            <li
              key={p.id}
              className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={p.avatar}
                  alt={p.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>{p.name}</span>
              </div>

              <span className={`font-bold ${statusColor}`}>
                {p.status}
              </span>

            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <Header/>

      <div className="bg-white shadow-md rounded-md p-6 mb-6">
        <h2 className="text-3xl font-bold mb-2">{tournoi.title}</h2>

        <p>Date: {tournoi.date}</p>
        <p>Sport: {tournoi.sport}</p>
        <p>Location: {tournoi.location}</p>
        <p>Format: {tournoi.format}</p>
        <p>Type: {tournoi.type}</p>
        <p>Participants: {tournoi.participantsCount}</p>

        <p className="mt-2">{tournoi.description}</p>
      </div>

      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-xl font-semibold mb-4">Participants</h3>

        {participantsContent}

      </div>
     <Formulaire ajouterParticipant={ajouterParticipant} />

    </div>
  );
}