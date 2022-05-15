import "../style/FinalPage.css";
import "../style/index.css";
import logo from "../ressources/done.png"
import test from "../ressources/test_final.jpg";

function FinalPage(props) {
    return (
        <main>
            <header>
                <img src={logo} alt="done-icon" id="done-icon"></img>
                <h1 className="title">Uploaded Successfully!</h1>
            </header>
            <img src={props.link} id="final_pict" alt="viewer"></img>
            
            <div id="url-box">
                <p>{props.link}</p>
            </div>    
        </main>
    );
}
export default FinalPage;