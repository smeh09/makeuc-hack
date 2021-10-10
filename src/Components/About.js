import React from 'react'
import "../styles/About.css"
const About = () => {
    return (
        <div>
            <h1 className="h1-about">About Us</h1>
            <h2 className="h2-desc">Studo is a project made by Yash and Shaurya for the MakeUc hack 2021.
                It is a project dedicated to readers as today the number of readers is rapidly decreasing. This project is made by using various apis with the React library of the Javacript programming language.
                </h2>
            <img src="./undraw_book_lover_mkck.png" alt="reading" className="image"/> 
            <h1 className="h1-about">How does Our Project Fit the Theme?</h1>
            <h2 className="h2-desc">Our project fits the Education roadmap of the theme as reading and language are an essential part of education. Our app helps
                students find new textbooks, know the meaning of words which improves their vocabulary </h2>
            
        </div>
    )
}
export default About;