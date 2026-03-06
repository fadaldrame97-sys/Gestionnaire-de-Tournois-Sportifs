import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Détails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournament/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

