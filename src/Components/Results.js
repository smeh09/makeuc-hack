import React from 'react'
import { useParams } from 'react-router';
import CleanUrl from '../modules/CleanUrl';
import ApiCall from "../modules/ApiCall";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Result.css";
import Button from '@mui/material/Button';

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

    if (books !== undefined){
        return(
            <div className='results'>
                {books.map(book =>(
                    <div className='book' key={book.id} id={book.id}>
                        <img className='bookThumbNail' src={getImage(book)} alt="the cover of your book"/>
                        <div className='bookRightArea'>
                            <h2 className='bookTite'>{book.volumeInfo.title}</h2>
                            <div className='bookDescr'>
                                <h2 className='bookAuthor'>Author:  {book.volumeInfo.authors}</h2>
                                <h2 className='bookCategories'>Categories: {book.volumeInfo.categories}</h2>
                                <Button variant="contained"><Link to={`/book/${book.id}`} className='knowMoreButton'>Know More</Link></Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    else {
        return (
        <div className="results">
            <h2>No Results Found</h2>
            <img src="https://cdn.dribbble.com/users/1554526/screenshots/3399669/no_results_found.png" alt="error "/>
            <h3>We could not find any results related to your search, please try again later or with a different a keyword</h3>
        </div>)
    }
}
export default Results;
