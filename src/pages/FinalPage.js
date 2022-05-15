import "../style/FinalPage.css";
import "../style/index.css";
import logo from "../ressources/done.png"
import test from "../ressources/test_final.jpg";

function FinalPage() {
    return (
        <main>
            <header>
                <img src={logo} alt="done-icon" id="done-icon"></img>
                <h1 className="title">Uploaded Successfully!</h1>
            </header>
            <img src={test} id="final_pict" alt="viewer"></img>
            
            <div id="url-box">
                <p>Oui je suis une url</p>
                
            </div>    
        </main>
    );
}
export default FinalPage;