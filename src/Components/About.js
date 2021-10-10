import React from 'react'
import "../styles/About.css"
const About = () => {
    return (
        <div>
            <h1 className="h1-about">About Us</h1>
            <h2 className="h2-desc">LectoPoint is a project made by Yash and Shaurya for the MakeUc hack 2021.
                It is a project dedicated to readers as today the number of readers is rapidly decreasing. This project is made by using various apis with the React library of the Javacript programming language.
                </h2>
            <img src="./undraw_book_lover_mkck.png" alt="reading" className="image"/>
        </div>
    )
}
export default About;