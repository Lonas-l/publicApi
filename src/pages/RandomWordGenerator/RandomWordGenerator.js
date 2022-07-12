import React, {useState} from "react";
import "./RandomWordGenerator.css"
import axios from "axios";

export default function RandomWordGenerator () {

    const [word, setWord] = useState([] )

    const getWord = () => {
        axios.get('https://random-word-api.herokuapp.com/word?number=10')
            .then(responce => {
                console.log(responce.data)
                setWord(responce.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>{word[0]}</h1>

            <button onClick={getWord}>
                Click on me
            </button>

        </div>
    );
}