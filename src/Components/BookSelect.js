import { useParams } from "react-router"
import ApiCall from "../modules/ApiCall"
import { useState, useEffect } from "react"
import "../styles/BookSelect.css"

const BookSelect = (props) => {
    const [book, setBook] = useState([])
    let params = useParams()
    console.log(params.id)
    let url = `https://www.googleapis.com/books/v1/volumes/${params.id}`
    async function getBook() {
        console.log(url)
        let data = await ApiCall(url)
        console.log(data)
        setBook([data])
        console.log(book)
    }
    useEffect(() => {
        getBook();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
    function getSaleStuff(book) {
        if (book.saleInfo.saleability === "FOR_SALE") {
            if (book.saleInfo.listPrice !== undefined) {
                if (book.saleInfo.buyLink !== undefined) {
                    return (
                        <div>
                            <h2>Price: {`${book.saleInfo.listPrice.amount} INR`}</h2>
                            <a href={book.saleInfo.buyLink}>Link to buy your book</a>
                        </div>
                    )

                }
                else {
                    return (
                        <div>
                            <h2>Price: {`${book.saleInfo.listPrice}`}</h2>
                            <h2>Link: {`Not Available`}</h2>
                        </div>
                    )
                }
            }
            else {
                return (<div>
                    <h2>Price: {`Not Available`}</h2>
                    <h2>Link: {`Not Available`}</h2>
                </div>)
            }
        }
        else {
            return <h2>{`${book.saleInfo.saleability}`}</h2>
        }
    }
    function getRating(book) {
        if (book.volumeInfo.averageRating !== undefined) {
            const rating = book.volumeInfo.averageRating;
            const lengthArray = [1, 2, 3, 4, 5];
            return ( lengthArray.map((num, i) => {
                if (num <= rating) {
                    return (
                        <img className='starImg' key={i} src='https://freeiconshop.com/wp-content/uploads/edd/star-outline-filled.png' alt='full star' />
                    )
                }
                else {
                    return (
                        <img className='starImg' key={i} src='https://www.shareicon.net/data/512x512/2015/10/02/650094_empty_512x512.png' alt='empty star' />
                    )
                }
            }) )
        }
        else {
            return `Rating: Not Available`
        }
    }
    function getImage(book) {
        if (book.volumeInfo.imageLinks !== undefined) {
            return book.volumeInfo.imageLinks.thumbnail
        }
        else {
            return "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
        }
    }
    function getPreview(book) {
        if (book.accessInfo.accessViewStatus !== "NONE") {
            return (<div>
                <a href={`${book.accessInfo.webReaderLink}`}>Link to preview your book</a>
                
            </div>)
        }
        else {
            return (<h2 > Preview is not available for this book</h2>)

        }
    }

    return (
        <div className='bookData'>
            {book.map((booker, i) => (
                <div className='bookContainer' key={i}>
                    <img className='bookImg' src={getImage(booker)} alt="cover of your book" />
                    <div className='bookBottomArea'>
                        <h1 className='bookTitle'>{booker.volumeInfo.title}</h1>
                        <h2 className='bookAuthor'>Authors: {booker.volumeInfo.authors}</h2>
                        <h2 className='bookPublishers'>Publishers: {booker.volumeInfo.publisher}</h2>
                        <h2>Description: </h2>
                        <p className='bookDescr' dangerouslySetInnerHTML={{ __html: booker.volumeInfo.description }}></p>
                        <p>{`Number of Pages in the ebook form: ${booker.volumeInfo.pageCount}`}</p>
                        <p>{`Number of Pages in the print form: ${booker.volumeInfo.printedPageCount}`}</p>
                        <h3>{getRating(booker)}</h3>
                        {booker.volumeInfo.categories}
                        <hr />
                        <h2 className='bookSaleInfo'>SALE INFO: </h2>
                        <div className='links'>
                            <div className='link'>{getSaleStuff(booker)}</div>
                            <div className='link' id="preview">{getPreview(booker)}</div>
                        </div>
                        <h2 className='note'>Note that previews may not work for some books</h2>
                    </div>
                </div>
            ))}

        </div>
    )

}

export default BookSelect
