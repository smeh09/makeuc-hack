import React from 'react'
import "../styles/FeatureOne.css"

export const FeatureOne = () => {
  return (
    <div className='feature1'>
      <div className='feature1TopArea'>
        <p className='feature1HeadingSmall'>SEARCH BOOKS AND WORD MEANINGS</p>
        <h1 className='feature1Heading'>You can search for books and get meanings of words from here! </h1>
        <p className="feature1Descr">
          Search up book on your favourite topic, or on the topic you want help with. If can't understand a word use our word meaning finder! 
        </p>
      </div>
      <div className='feature1BottomArea'>
      <img className='feature1Img' src='https://blogs.constantcontact.com/wp-content/uploads/2014/01/FindingYourBusiness.png' alt='feature-1' />
      </div>
    </div>
  )
}
