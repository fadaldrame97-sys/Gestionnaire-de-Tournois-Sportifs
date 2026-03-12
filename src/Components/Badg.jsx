
export default function Badg(props){

let statutClors="";

   if(props.status==="On Going"){
    statutClors="bg-green-100 text-green-600";
   }
else if(props.status==="Upcoming"){
    statutClors="bg-blue-200 text-blue-600"; 
}
else{  statutClors="bg-yellow-200 text-black"; 
} 

return(
   <span className={`px-3 py-1 rounded-full text-xs ${statutClors}`}>
        {props.status}
      </span>  


); 

}