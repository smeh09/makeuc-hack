import React from 'react'
import { useParams } from 'react-router';
import CleanUrl from '../modules/CleanUrl';
import ApiCall from "../modules/ApiCall";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    
    function getImage(book){
        if (book.volumeInfo.imageLinks !== undefined){
            return book.volumeInfo.imageLinks.smallThumbnail
        }
        else {
            return "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
        }
    }
    return(
        <div>
            {books.map(book =>(
                <div key={book.id} id={book.id}>
                    <img src={getImage(book)} alt="the cover of your book"/>
                    <h1>{book.volumeInfo.title}</h1>
                    <h2>{book.volumeInfo.authors}</h2>
                    <h2>{book.volumeInfo.pusblisher}</h2>
                    <h2>{book.volumeInfo.categories}</h2>
                    <Link to={`/book/${book.id}`}>Know More</Link>
                </div>
            ))}
        </div>
    )
}
export default Results;
