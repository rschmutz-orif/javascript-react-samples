import React from 'react'

import './PhraseDisplay.css';

const PhraseDisplay = ({ selectedPhrase }) => {
  return (<div className="phrase-display">
    <h1>Phrase sélectionnée :</h1>
    <p>{selectedPhrase.sujet} {selectedPhrase.verbe} {selectedPhrase.complement}</p>
  </div>)
}

export default PhraseDisplay