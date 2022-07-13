import axios from "axios";


export const getWord = (setWord) => {
    axios.get('https://random-word-api.herokuapp.com/word?number=10')
        .then(responce => {
            console.log(responce.data)
            setWord(responce.data)
        })
        .catch(error => {
            console.log(error)
        })
}

export const getCatImage = (setCat) => {
    axios.get('https://api.thecatapi.com/v1/images/search')
        .then(responce => {
            console.log(responce.data)
            setCat(responce.data)
        })
        .catch(error => {
            console.log(error)
        })
}

