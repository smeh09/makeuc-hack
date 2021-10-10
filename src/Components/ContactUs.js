import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import "../styles/ContactUs.css";
import React, { useState } from 'react';
export const ContanctUs = () => {

  const [ nameInput, setNameInput ] = useState("");
  const [ msgInput, setMsgInput ] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (nameInput.trim() === '' || msgInput.trim() === '') {
      alert("You are required to fill all the input fields! ")
      return;
    }

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=yashtri22@gmail.com&su=Hello from ${nameInput}&body=${msgInput}`)
    setNameInput("");
    setMsgInput("");
  }

  return (
    <div className='contactUs'>
      <h1 className='contactUsHeading'>Contact us</h1>
      <form className='contactUsFormContainer'>
        <FormControl>
          <InputLabel>Your Name</InputLabel>
          <Input className='contactUsNameInput' value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel>Your Message</InputLabel>
          <Input className='contactUsNameInput' value={msgInput} onChange={(e) => setMsgInput(e.target.value)} />
        </FormControl>
        <Button className='submitButton' onClick={(e) => handleSubmit(e)} variant="contained" type='submit'>Contact Us</Button>
      </form>
    </div>
  )
}
