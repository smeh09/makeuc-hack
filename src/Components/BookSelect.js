import { useParams } from "react-router"
import ApiCall from "../modules/ApiCall"
import { useState, useEffect } from "react"
const BookSelect = (props) => {
    const [book, setBook] = useState([])
    let params = useParams()
    console.log(params.id)
    let url = `https://www.googleapis.com/books/v1/volumes/${params.id}`
    async function getBook () {
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
    function getSaleStuff(book){
        if (book.saleInfo.saleability === "FOR_SALE"){
            if (book.saleInfo.listPrice !== undefined){
                if (book.saleInfo.buyLink !== undefined){
                    return  (
                    <div>
                    <h2>Price: {`${book.saleInfo.listPrice.amount} INR`}</h2>
                    <a  href={book.saleInfo.buyLink}>Link to buy your book</a>
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
    function getRating(book){
        if (book.volumeInfo.averageRating ){}
    }
    return (
        <div>
            {book.map((booker,i )=> (
                <div key={i}>
                    <h1>{booker.volumeInfo.title}</h1>
                    <h2>{booker.volumeInfo.authors}</h2>
                    <h2>{booker.volumeInfo.publisher}</h2>
                    {getSaleStuff(booker)}
                    <h3>{booker.volumeInfo.categories}</h3>
                    <h3> Rating: {booker.volumeInfo.averageRating}  stars out of 5</h3>
                </div>
            ))}
            
        </div>
    )
    
}

export default BookSelect