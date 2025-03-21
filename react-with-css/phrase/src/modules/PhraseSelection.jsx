import React, { useState } from 'react'

import './PhraseSelection.css';

const WordSelector = ({ wordId, value, selectedPhrase, setSelectedPhrase }) => {
  const handleSelectWord = (e) => {
    setSelectedPhrase({...selectedPhrase, [wordId]: value});
  }

  return <li className={(selectedPhrase[wordId] === value) ? "active" : ""} onClick={handleSelectWord}>{value}</li>
}

const WordSelection = ({ focusedWord, selectedPhrase, setSelectedPhrase }) => {
  return <section>
    <h2>{focusedWord.name}</h2>
    <ul>
      {focusedWord.values.map(aValue => <WordSelector key={aValue} wordId={focusedWord.id} value={aValue} selectedPhrase={selectedPhrase} setSelectedPhrase={setSelectedPhrase} />)}
    </ul>
  </section>
}

const WordNavigation = ({ word, selectedWord, setSelectedWord }) => {
  const handleChangeSelector = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedWord(word)
  }
  return <a href="#" className={(selectedWord.id === word.id) ? "active": ""} onClick={handleChangeSelector}>{word.name}</a>
}

const PhraseSelection = ({ words, selectedPhrase, setSelectedPhrase }) => {
  const [selectedWord, setSelectedWord] = useState(words[0]);

  return (<div className="phrase-selection">
    <h1>Modifier la phrase : </h1>
    <nav>
      {words.map(aWord => <span key={aWord.id}><WordNavigation word={aWord} selectedWord={selectedWord} setSelectedWord={setSelectedWord} />{' '}</span>)}
    </nav>
    <WordSelection key={selectedWord.id} focusedWord={selectedWord} selectedPhrase={selectedPhrase} setSelectedPhrase={setSelectedPhrase} />
  </div>)
}

export default PhraseSelection