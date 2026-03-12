import { useState } from "react"
export default function Inscrire(){

     const [inscrit, setInscrire] =useState(false)

     function Substract(){
        if(inscrit){
            setInscrire(false);
        } else { setInscrire(true)}
     }

     let textButton;

     if (inscrit){
        textButton="Se désinscrire";
       
     } else{ textButton="S'incrire"}
    return(  
        <button onClick={Substract}>{textButton}</button>

    )
}