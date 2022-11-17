import { useState, useEffect } from 'react';
import './abilityScores.css';

function AbilityScore({ character, setCharacter, abilityScore, abilityScoreName, currentPage, setCurrentPage}) {

    function updateCharacter(event) {
        const value = event.target.value

        character.abilityScores[abilityScore] = value
        setCharacter(character)
        setCurrentPage(currentPage)
    }

    useEffect(() => {
        console.log("Ding")
    })

    return (
        <div id="ScoreContainer">
            <div id="AbilityScoreName">{abilityScoreName}</div>
            <input type="number" placeholder='0' id="AbilityScoreNumber" className={abilityScore} onChange={e => updateCharacter(e)}></input>
        </div>
    );
}

export default AbilityScore;
