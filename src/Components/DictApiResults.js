import React from 'react'
import { useState, useEffect } from "react";
import CleanUrlDict from "../modules/CleanUrlDict"
import { useParams } from "react-router-dom";
import "../styles/DictApiResults.css"

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

    return (
        <div>
            {
                meaning.map((mean, i) => {
                    return (
                        <div key={i} className='meaning'>
                            <h2 className='word'>{mean["word"]}</h2>
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
    )
}
export default DictApiResults;
