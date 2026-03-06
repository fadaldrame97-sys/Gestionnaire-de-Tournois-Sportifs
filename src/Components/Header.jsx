import Notif from "../assets/Notif.png";
import Fadal from "../assets/Fadal.jpg"
import { Input } from "postcss";
export default function Header(){
    return(
        <header className=" bg-blue-500 text-white p-4  shadow-[0_10px_30px_rgba(59,130,246,0.5)]" >
    <div className="  w-full flex   items-center justify-between">
         <div className="mt-8">
         <h1>Good Morning</h1>
         <h1>Fadal Dramé</h1>
       </div>
   
    <div className="flex justify-end  w-1/2 gap-3">
        <img src={Notif} alt="Notification icon" width="24"  />
        <img src={Fadal} alt="Notification icon" width="24" height="24" className=" rounded-xl shadow-2xl" />
</div>
 </div>
<div className="mt-10 flex items-center justify-center w-full">
 <input
  type="text"
  placeholder="Rechercher..."
  className="border p-2 rounded-lg w-full bg-white text-black "
/>
</div>
        </header>
    )
}
