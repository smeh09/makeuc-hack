import React from 'react'

const CleanUrlDict = (lang, word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
    return url

}
export default CleanUrlDict;
