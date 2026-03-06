export default function ParticipantsList({participants}){
  return(
<div>

    {participants.map((participant)=>(
        <p Key={participant.id}>{participant.name}-{participant.status}
        </p>
    ))}
</div>
  ); 
}