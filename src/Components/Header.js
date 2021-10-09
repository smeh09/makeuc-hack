import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import React from 'react'
import '../styles/Header.css'

export const Header = ({ title }) => {
  return (
    <header className='header'>
      <div className="headerLeftArea">
        <div className='headerTitle'>{ title }</div>
      </div>
      <div className="headerRightArea">
        <nav className="headerNav">
          <ul className="navList">
            <li className="navListItem">
            <Link className="navLink" to='/'><Button className='navListLinkButton' variant="text">Home</Button></Link>
            </li>
            <li className="navListItem">
            <Link className="navLink" to='/about'><Button className='navListLinkButton' variant="text">About</Button></Link>
            </li>
            <li className="navListItem">
            <Link className="navLink" to='/searchBook'><Button className='navListLinkButton' variant="text">Search Books</Button></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
