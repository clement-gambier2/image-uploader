import FinalPage from "./pages/FinalPage";
import UploadPage from "./pages/UploadPage";
import HomePage from "./pages/HomePage";
function App() {
  
  let etat = "home"
  return(
    <div className="App">  
    {/* Three states possible : home, upload, final */}
    {etat === "home" && <HomePage />}
    {etat === "upload" && <HomePage />}
    {etat === "final" && <HomePage />}
    
    
      {/* <UploadPage /> */}
      {/* <FinalPage /> */}
    </div>
  );
  
}
export default App;