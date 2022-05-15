import FinalPage from "./pages/FinalPage";
import UploadPage from "./pages/UploadPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";





function App() {
  const [etatPage, setEtatPage] = useState("home");
  const [link, setLink] = useState("");
  
  return(
    <div className="App">  
      {/* Three states possible : home, upload, final */}
      {etatPage === "home" && <HomePage setter={setEtatPage} link={setLink}  />}
      {etatPage === "upload" && <UploadPage setter={setEtatPage} />}
      {etatPage === "final" && <FinalPage setter={setEtatPage} link={link} />}
    </div>
  );
  
}
export default App;