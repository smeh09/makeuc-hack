import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import React, { useState } from 'react';
import '../styles/SearchBookForm.css';
import { useHistory } from 'react-router';
const SearchBookForm = () => {

  const [ generalKeywords, setGeneralKeyWords ] = useState("");
  const [ bookTitle, setBookTitle ] = useState("");
  const [ author, setAuthor ] = useState("");
  const [ publisher, setPublisher ] = useState("");
  const [ lang, setLang ] = useState("el");
  const [ printType, setPrintType ] = useState("all");
  const [ filter, setFilter ] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    function getKeyword () {
      let new_key = generalKeywords.replace( / /g, "+")
      return new_key
    }
    function getBookTitle(){
      if (bookTitle === ""){
        return "nan"
      }
      else {
        let new_title = bookTitle.replace( / /g, "")
        return new_title
      }
    }
    function getAuthor(){
      if (author === ""){
        return "nan"
      }
      else {
        let new_author = author.replace( / /g, "")
        return new_author
      }
    }
    function getPublisher(){
      if (publisher === ""){
        return "nan"
      }
      else {
        return publisher
      }
    }
    function getFilter(){
      if (filter === ""){
        return "none"
      }
      else {
        return filter
      }
    }
    if (generalKeywords !== ""){
     history.push(`/details/${getKeyword()}/${getAuthor()}/${getBookTitle()}/${getPublisher()}/${getFilter()}/${lang}/${printType}`)
    }
    else {
      alert("Please Enter a keyword")
    }
  
}

  return (
    <div className='searchBook'>
      <h1 className='searchBookHeading'>Search a book</h1>
      <form className='contactUsFormContainer'>
        <FormControl>
          <InputLabel>General keywords</InputLabel>
          <Input value={generalKeywords} onChange={(e) => setGeneralKeyWords(e.target.value)} className='searchBookFormInput' required/>
        </FormControl>
        <FormControl>
          <InputLabel>Book title</InputLabel>
          <Input value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} className='searchBookFormInput' />
        </FormControl>
        <FormControl>
          <InputLabel>Author</InputLabel>
          <Input value={author} onChange={(e) => setAuthor(e.target.value)} className='searchBookFormInput' />
        </FormControl>
        <FormControl>
          <InputLabel>Publisher</InputLabel>
          <Input value={publisher} onChange={(e) => setPublisher(e.target.value)} className='searchBookFormInput' id='lastInput' />
        </FormControl>
        <select value={lang} id='searchBookFormSelectLang' className='searchBookFormInput' onChange={e => {setLang(e.target.value)}} onBlur={(e) => setLang(e.target.value)}>
          <option value="el">Every Language</option>
          <option value="ar">Arabic</option>
          <option value="bn">Bengali</option>
          <option value="zh">Chinese</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
          <option value="pt">Portugese</option>
          <option value="ru">Russian</option>
          <option value="es">Spanish</option>
        </select>
        <select value={printType}  className='searchBookFormInput' onChange={e => {setPrintType(e.target.value)}} onBlur={(e) => setPrintType(e.target.value)} >
          <option value="all"> All print types</option>
          <option value="books"> All books</option>
          <option value="magazines"> All Magazines</option>
        </select>
        <select value={filter}  className='searchBookFormInput' onChange={e => {setFilter(e.target.value)}} onBlur={(e) => setFilter(e.target.value)} >
          <option value="none"> None </option>
          <option value="ebooks"> All google ebooks </option>
          <option value="free-ebooks"> All free google ebooks</option>
          <option value="paid-ebooks"> All paid google ebooks</option>
        </select>
        <Button className='submitButton' onClick={(e) => handleSubmit(e)} variant="contained" type='submit'>Search book</Button>
      </form>
    </div>
  );
};

export default SearchBookForm;