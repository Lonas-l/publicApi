import React, {useEffect, useState} from "react";
import "./RandomWordGenerator.css"
import {getCatImage, getWord} from './services'

export default function RandomWordGenerator () {

    const [word, setWord] = useState([] )
    const [cat, setCat] = useState([{}] )

    useEffect(() => {
        getCatImage(setCat);
    },[])

    console.log(cat[0])

    return (
        <div className="wordGeneratorPage">

            <div className='wordWrapper'>
                {/*{word.map((value) =>*/}
                {/*    <span className='wordBlock' key={value}>{value}</span>*/}
                {/*)}*/}
            </div>

            {/* I can't found free image search API, but i found API random cats....*/}
            <figure className='catWrapper' onClick={() => getCatImage(setCat) }>
                <img src={cat[0].url} alt=""/>
            </figure>

            <button onClick={() => getCatImage(setCat) } className='generateButton'>
                Generate
            </button>

        </div>
    );
}