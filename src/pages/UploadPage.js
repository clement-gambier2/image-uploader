import "../style/index.css";
import "../style/UploadPage.css";
function UploadPage(props){
    const setState = props.setter;

    const animation = () => {

        // setTimeout(3000)
        setState("final")
        
    };

    return(
        <main onLoad={animation}>
            <h1>Uploading</h1>
            <div id="loading-bar">
                <span id="progress-value"></span>
            </div>
        </main>
    );
}
export default UploadPage;