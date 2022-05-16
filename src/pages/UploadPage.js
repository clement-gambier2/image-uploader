import "../style/index.css";
import "../style/UploadPage.css";
import { useEffect } from "react";
function UploadPage(props){
    const setState = props.setter;

    useEffect(() => {
        setTimeout(() => {
            setState("final");
        },5000)
        
    },[])

    return(
        <main>
            <h1>Uploading</h1>
            <div id="loading-bar">
                <span id="progress-value"></span>
            </div>
        </main>
    );
}
export default UploadPage;