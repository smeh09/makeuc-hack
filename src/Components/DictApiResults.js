import React from 'react'
import {useState, useEffect} from "react";
import CleanUrlDict from "../modules/CleanUrlDict"
import {useParams} from "react-router-dom";
const DictApiResults = (props) => {

    let params = useParams()
    const [meaning, setMeaning] = useState([])
    let url = CleanUrlDict(params.lang, params.word)
    console.log(url)
    async function getMeaning(){ 
        console.log(url)
        let data =  await fetch(url, {mode: "cors"})
        let json = await data.json()
        console.log(json)
        setMeaning([json])
        
    }
    useEffect(() => {
        getMeaning()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
    return (
        <div>
            <h2></h2>
        </div>
    )
}
export default DictApiResults;
