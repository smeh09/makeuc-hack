import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import React from 'react';

export const HomeAppHero = () => {
  return (
    <div className='homeAppHeroMainContainer'>
      <div className='homeAppHeroLeftArea'>
        <div className='homeAppHeroHeadingContainer'>
          <h1 className='homeAppHeroHeading'>
            Get, modern tech good quality projects, which will be built by our devs
          </h1>
          <p className='homeAppHeroDescr'>
            We have good developers which will develop, good projects for you.
          </p>
          <Link className='homeAppHeroAboutLink' to='/about'><Button className='homeAppHeroReadMoreBtn' variant="contained">Read more about us</Button></Link>
        </div>
      </div>
      <div className='homeAppHeroRightArea'>
        <img alt="Intro about us" className='homeAppHeroImg' src='https://bmsastech.com/wp-content/uploads/2020/04/mobile-app-development-technologies.png' />
      </div>
    </div>
  )
}
