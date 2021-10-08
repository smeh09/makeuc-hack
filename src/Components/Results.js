import React from 'react'
import { useParams } from 'react-router';
import CleanUrl from '../modules/CleanUrl';
import ApiCall from "../modules/ApiCall";
const Results = (props) => {
    let params = useParams()
    let url = CleanUrl(params.keyword, params.keywordInAuthor, params.keywordInTtile, params.keywordInPublisher, params.filter, params.lang, params.printType)
    console.log(url)
    async function getBooks () {
        let data = await ApiCall(url)
        console.log(data)
    }
    getBooks()
    return (
        <div>
            
        </div>
    )
}
export default Results;
