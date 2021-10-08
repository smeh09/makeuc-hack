import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import React, { useState } from 'react';
import '../styles/SearchBookForm.css';

const SearchBookForm = () => {

  const [ generalKeywords, setGeneralKeyWords ] = useState("");
  const [ bookTitle, setBookTitle ] = useState("");
  const [ author, setAuthor ] = useState("");
  const [ publisher, setPublisher ] = useState("");
  const [ lang, setLang ] = useState("");
  const [ printType, setPrintType ] = useState("");
  const [ filter, setFilter ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='searchBook'>
      <h1 className='searchBookHeading'>Search a book</h1>
      <form className='contactUsFormContainer'>
        <FormControl>
          <InputLabel>General keywords</InputLabel>
          <Input value={generalKeywords} onChange={(e) => setGeneralKeyWords(e.target.value)} className='searchBookFormInput' />
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
          <option value="ebooks"> All google ebooks </option>
          <option value="free-ebooks"> All free google ebooks</option>
          <option value="paid-ebooks"> All paid google ebooks</option>
        </select>
        <Button type='submit' className='submitButton' onClick={(e) => handleSubmit(e)} variant="contained" type='submit'>Search book</Button>
      </form>
    </div>
  );
};

export default SearchBookForm;