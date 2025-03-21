import React, { useState } from 'react'

import './Home.css';
import data from '../data/words.json';
import PhraseDisplay from './PhraseDisplay';
import PhraseSelection from './PhraseSelection';

const INITIAL_SELECTED_PHRASE = data.reduce((partialPhrase, aPart) => { 
  return {...partialPhrase, [aPart.id]: aPart.values[0] }
}, {});

console.log(INITIAL_SELECTED_PHRASE);

const Home = () => {
  const [selectedPhrase, setSelectedPhrase] = useState(INITIAL_SELECTED_PHRASE)
  return (<div className="home">
      <PhraseDisplay selectedPhrase={selectedPhrase} />
      <PhraseSelection words={data} selectedPhrase={selectedPhrase} setSelectedPhrase={setSelectedPhrase} />
  </div>)
}

export default Home