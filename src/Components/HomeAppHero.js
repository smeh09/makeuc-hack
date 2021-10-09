import { Link } from 'react-router-dom';
import '../styles/HomeAppHeroMainContainer.css';
import Button from '@mui/material/Button';
import React from 'react';

export const HomeAppHero = () => {
  return (
    <div className='homeAppHeroMainContainer'>
      <div className='homeAppHeroLeftArea'>
        <div className='homeAppHeroHeadingContainer'>
          <h1 className='homeAppHeroHeading'>
            Search for your favourite books, on the basis of author, title, etc.
          </h1>
          <p className='homeAppHeroDescr'>
            You can search your favourite books, and know about them here. We also have a dictionary to help you up with words! 
          </p>
          <Link className='homeAppHeroAboutLink' to='/searchBook'><Button className='homeAppHeroReadMoreBtn' variant="contained">Search for books</Button></Link>
        </div>
      </div>
      <div className='homeAppHeroRightArea'>
        <img alt="Intro about us" className='homeAppHeroImg' src='https://img.freepik.com/free-vector/woman-relaxing-home-girl-drinking-hot-tea-reading-book-armchair-flat-vector-illustration-leisure-evening-literature_74855-8684.jpg?size=626&ext=jpg' />
      </div>
    </div>
  )
}
