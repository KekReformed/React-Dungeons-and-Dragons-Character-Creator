import { useState, useEffect } from 'react';
import './abilityScores.css';

function AbilityScore({ character, setCharacter, abilityScore, abilityScoreName }) {

    var [previousVal, setValue] = useState()

    function updateCharacter(event) {
        console.log(abilityScore, character.abilityScores)
        const value = event.target.value

        setCharacter({
            ...character,
            abilityScores: {
                ...character.abilityScores,
                [abilityScore]: value
            }
        })
        document.getElementsByClassName(abilityScore).value = character.abilityScores[abilityScore]
        setValue(value)
        character.abilityScores[abilityScore] = value
    }

    useEffect(() => {
        console.log("Ding")
    })

    return (
        <div id="ScoreContainer">
            <div id="AbilityScoreName">{abilityScoreName}</div>
            <input type="number" placeholder='0' id="AbilityScoreNumber" className={abilityScore} value={character.abilityScores[abilityScore]} onChange={e => updateCharacter(e)}></input>
        </div>
    );
}

export default AbilityScore;
