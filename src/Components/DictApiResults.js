import React from 'react'
import { useState, useEffect } from "react";
import CleanUrlDict from "../modules/CleanUrlDict"
import { useParams } from "react-router-dom";
import "../styles/DictApiResults.css"
import "../styles/NoResultsFound.css"

const DictApiResults = (props) => {

    let params = useParams()
    const [meaning, setMeaning] = useState([])
    let url = CleanUrlDict(params.lang, params.word)
    async function getMeaning() {
      
        let data = await fetch(url, { mode: "cors" })
        let json = await data.json()
        setMeaning(json)
        
    }

    useEffect(() => {
        getMeaning()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    console.log(meaning)

    if (meaning.title !== "No Definitions Found"){
    return (
        <div className="meaning-container">
            <div className="try">
            {
                meaning.map((mean, i) => {
                    return (
                        <div key={i} className='meaning'>
                            <h1 className='word'>{mean["word"]}</h1>
                            {mean["meanings"].map((meaningObj, i) => {
                                return (
                                    meaningObj["definitions"].map((definition, i) => {
                                        return (
                                            <div key={i} className='wordmeaning'>
                                                <h3 className='meaning'>Meaning: {definition["definition"]}</h3>
                                                <p className='example'>Example: {definition["example"]}</p>
                                                <p className='type'>Type: {meaningObj["partOfSpeech"]}</p>
                                            </div>
                                        )
                                    })
                                )
                            })}
                        </div>
                    )
                })
            }
            </div>
        </div>
    )}
    else {
        return (
            <div className="no-results-container">
            <h1 className="no-results-head">{meaning.title}</h1>
            <img src="https://cdn.dribbble.com/users/1554526/screenshots/3399669/no_results_found.png" alt="error " className="no-results-image"/>
            <h2 className="no-results-p" >This likely happened because the word you typed does not exist in the language you have chosen, please try again with a different word or you can try searching the web</h2>
            </div>
        )
    }
}
export default DictApiResults;
