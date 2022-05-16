import "../style/FinalPage.css";
import "../style/index.css";
import logo from "../ressources/done.png"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";
function FinalPage(props) {

    const [value, setValue] = useState(props.link);
    const [copied, setCopied] = useState(false);
    return (
        <main>
            <header>
                <img src={logo} alt="done-icon" id="done-icon"></img>
                <h1 className="title">Uploaded Successfully!</h1>
            </header>
            <img src={props.link} id="final_pict" alt="viewer"></img>
            
            <div id="url-box">
                <p>{props.link}</p>
                
                <CopyToClipboard
                    options={{ debug: props.debug, message: "" }}
                    text={value}
                    onCopy={() => setCopied(true)}>
                    <button>Copy to clipboard with button</button>
                </CopyToClipboard>
            </div>    
        </main>
    );
}
export default FinalPage;