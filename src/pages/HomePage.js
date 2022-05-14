import Button from "../components/Button";
import HomePict from "../ressources/image.svg"
import "../style/index.css";
import "../style/HomePage.css";
function HomePage() {
    return (
        <main>
            <header>
                <h1>Upload your image</h1>
                <p>File should be Jpeg, Png,...</p>
            </header>
            
            <div id="box">
                <img src={HomePict} alt="mountain pict"/>
                <p>Drag & Drop your image here</p>
            </div>
            <div id="choose-container">
                <p>Or</p>
                <Button name="Choose a file" />
            </div>
            
        </main>
    )
}
export default HomePage;