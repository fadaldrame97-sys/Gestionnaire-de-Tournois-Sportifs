const [totalPrice, setTotalPrice] = useState(0);

useEffect(() => {
  document.title = `Total de vos achats ${totalPrice} €`
}, [totalPrice])



useEffect(() => { ... }, [])


useEffect(() => { ... }, [dep1, dep2])

return () => { ... }




import { useEffect, useState } from "react";

function App() {

  const [name, setName] = useState("Edward");
  const [age, setAge] = useState(20);

  function handleClick() {
    setName("Taylor");
    setAge(a => a + 1);
  }

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={handleClick}>Changer</button>
    </div>
  );
}



useEffect pour login 

useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    console.log("Utilisateur déjà connecté");
  }
}, []);