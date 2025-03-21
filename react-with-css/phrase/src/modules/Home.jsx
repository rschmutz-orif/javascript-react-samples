import React from 'react'

import './Home.css';
import data from '../data/words.json';
import PhraseDisplay from './PhraseDisplay';
import PhraseSelection from './PhraseSelection';

const Home = () => {
  return (<div className="home">
      <PhraseDisplay />
      <PhraseSelection />
  </div>)
}

export default Home