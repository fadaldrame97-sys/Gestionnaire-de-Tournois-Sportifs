import { useState } from "react"
export default function Inscrire({Ajouter,Retire}){

     const [inscrit, setInscrire] =useState(false)

     function Substract(event){
          event.stopPropagation();
        if(inscrit){
            setInscrire(false);
          
         if (Retire !== undefined && Retire !== null) {
    Retire();
            
            }
        }
         else {
             setInscrire(true)
               if (Ajouter !== undefined && Ajouter !== null) {
    Ajouter();
        }

            
     }
    }

     let textButton;

     if (inscrit){
        textButton="Se désinscrire";
       
     } else{ textButton="S'incrire"}
    return(  
        <button onClick={Substract} className="bg-green-500 shadow-2xl rounded-lg py-2 ">{textButton}</button>
        


        

    )
}