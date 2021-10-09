import React from 'react'
import { useParams } from 'react-router';
import CleanUrl from '../modules/CleanUrl';
import ApiCall from "../modules/ApiCall";
import { useState, useEffect } from 'react';
const Results = (props) => {
    const [books, setBooks] = useState([])
    let params = useParams()
    let url = CleanUrl(params.keyword, params.keywordInAuthor, params.keywordInTtile, params.keywordInPublisher, params.filter, params.lang, params.printType)
    async function getBooks () {
        let data = await ApiCall(url)
        console.log(data)
        setBooks(data.items)
        console.log(books)
    }
    useEffect(() => {
        getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
    
    return(
        <div>
            {books.map(book =>(
                <div key={book.id} id={book.id}>
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="the cover of your book"/>
                    <h1>{book.volumeInfo.title}</h1>
                    <h2>{book.volumeInfo.authors}</h2>
                    <h2>{book.volumeInfo.pusblisher}</h2>
                    <h2>{book.volumeInfo.categories}</h2>
                </div>
            ))}
        </div>
    )
}
export default Results;
