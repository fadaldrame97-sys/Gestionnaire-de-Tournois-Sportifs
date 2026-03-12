import { useState } from "react"
export default function Inscrire(){

     const [inscrit, setInscrire] =useState(false)

     function Substract(){
        if(inscrit){
            setInscrire(false);
        } else { setInscrire(true)}
     }
    return(

    )
}