import "../style/index.css";
function UploadPage(props){
    return(
        <main>
            <h1>Uploading</h1>
            <span id="loading-bar"></span>
            <p>{props.link}</p>
        </main>
    );
}
export default UploadPage;