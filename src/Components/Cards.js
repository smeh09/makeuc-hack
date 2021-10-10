import { Link } from "react-router-dom";
import React from 'react';
import Button from '@mui/material/Button';
import "../styles/Cards.css";

export const Cards = () => {
  return (
    <>
    <h1 className='cardsHeading'>Features</h1>
    <div className='cards'>
      <div className='card'>
      <h2 className='cardHeading'>A book finder</h2>
        <p className="cardDescr">In this project, we have a word book finder. You can give, multiple attributes to find books like, general keywords, book title, author, publisher, etc. From these attributes you give, we find you options of suitable books you are looking for!</p>
        <div className='cardLinkContainer'><Link className='cardLink' to='/searchBook'><Button className='cardBtn' variant="contained">Search books</Button></Link></div>
      </div>
      <div className='card'>
        <h2 className='cardHeading'>A word meaning finder</h2>
        <p className="cardDescr">In this project, we also have a word meaning finder! It supports multiple languages like - English, French, German and Spanish! You can search for a word's meaning, and we'll show you with the meaning of that word, example sentence, and much more. </p>
        <div className='cardLinkContainer'><Link className='cardLink' to='/searchDictionary'><Button className='cardBtn' variant="contained">Search word meanings</Button></Link></div>
      </div>
    </div>
    </>
  )
}
