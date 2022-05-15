//Import styles
import HomePict from "../ressources/image.svg"
import "../style/index.css";
import "../style/HomePage.css";

//Import what we neddd to use the function
import { useState} from "react";
import {ref,uploadBytes,getDownloadURL} from "firebase/storage";
import { storage } from "../Firebase";

function HomePage(props) {
    //States
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState([]);
    const setState = props.setter;
    const setLink = props.link;    

    //Function to upload image to firebase storage
    const upload = () => {
        if (image == null) return;

        //Need to specify the path to the image    
        const imageRef = ref(storage, image.name);
        //Upload the image to firebase storage
        uploadBytes(imageRef, image).then((element) => {
            //Whith th uploadBytes function we get a promise, so we need to wait for it to be resolved
            //After that we can directly get the download url of the image to use it to display the image
            getDownloadURL(element.ref).then((url) => {
                setUrl(() => [url]);
                setLink(() => url);
                
            });
        });
        setState("final");
        
    };


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
                <input className="button" type="file"onChange={(event) => {
                    setImage(event.target.files[0]);
                }}/>
                <button onClick={upload}> Upload Image</button>
                <img src={url[0]}/>
            </div>
        </main>
    )
}
export default HomePage;