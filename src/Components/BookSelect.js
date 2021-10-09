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
    return (
        <div>
            {book.map((booker,i )=> (
                <div key={i}>
                    <h1>{booker.volumeInfo.title}</h1>
                    <h2>{booker.volumeInfo.authors}</h2>
                    <h2>{booker.volumeInfo.publisher}</h2>
                    <h2>{booker.saleInfo.saleability}</h2>
                    <h3>{booker.volumeInfo.categories}</h3>
                    <h3></h3>
                    <h3> Rating: {booker.volumeInfo.averageRating}  stars out of 5</h3>
                </div>
            ))}
            
        </div>
    )
    
}

export default BookSelect