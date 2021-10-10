import React from 'react'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { useState } from 'react';
import '../styles/SearchBookForm.css';
import "../styles/SearchBookFormDict.css";
import {useHistory} from "react-router";
const DictForm = () => {
    const [word, setWord] = useState("")
    const [lang, setLang] = useState("en")
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/dictionary/${lang}/${word}`)
    }
    function hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }

    return (
        <div className="searchBook">
            <h1 className="dict-input">Input Your Word (No Spaces Allowed)</h1>
            <form className = 'contactUsFormContainer'>
                <FormControl>
                    <InputLabel>Word</InputLabel>
                    <Input value={word} onChange={(e) => setWord(e.target.value)} className='searchBookFormInput' required/>
                </FormControl>
                <select value={lang} id='searchBookFormSelectLang' className='searchBookFormInput' onChange={e => {setLang(e.target.value)}} onBlur={(e) => setLang(e.target.value)}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="es">Spanish</option>
                </select>
                <Button disabled= {word.trim() === "" || hasWhiteSpace(word) === true}className='submitButton' variant="contained" type='submit' onClick={(e) => handleSubmit(e)}>Get Meaning</Button>
            </form>
        </div>
    )
}
export default DictForm;