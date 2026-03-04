import Notif from "./assets/Notif.png";
import Fadal from "./assets/Fadal.jpg"
export default function Header(){
    return(
        <header style={{ backgroundColor: "black", color: "white" }}>
    <div>
         <h1>Good Morning</h1>
         <h1>Fadal Dramé</h1> 
    
        <img src={Notif} alt="Notification icon" width="24" />
        <img src={Fadal} alt="Notification icon" width="24" />

    </div>

        </header>
    )
}
