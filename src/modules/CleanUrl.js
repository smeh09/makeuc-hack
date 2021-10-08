function CleanUrl (general_q, q_author, q_title, q_publisher, filter, lang, print_type) {
    const getQuery = () => {
        return `q=${general_q}`
    }
    const getAuthor = () => {
        if (q_author !== "nan"){
            return `+inauthor:${q_author}`
        }
        else {
            return ""
        }
    }
    const getTtile = () => {
        if (q_title !== "nan"){
            return `+intitle:${q_title}`
        }
        else {
            return ""
        }
    }
    const getPublisher = () => {
        if (q_publisher !== "nan"){
            return `+inpublisher:${q_publisher}`
        }
        else {
            return ""
        }
    }
    const getLang = () => {
        if (lang !== "el"){
            return `&langRestrict=${lang}`
        }
        else {
            return ""
        }
    }
    const getFilter = () => {
        console.log(filter)
        if (filter !== "none"){
            return `&filter=${filter}`
        }
        else {
            return ""
        }
    } 
    const url = `https://www.googleapis.com/books/v1/volumes?${getQuery()}${getAuthor()}${getTtile()}${getPublisher()}${getLang()}${getFilter()}&printType=${print_type}`
    console.log(url)
    return url;
}

export default CleanUrl;