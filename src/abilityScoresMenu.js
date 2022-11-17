import AbilityScore from './abilityScores';
//import './abilityScores.css';

function AbilityScoresMenu({ character, setCharacter, currentPage, setCurrentPage}) {

    function roll() {
        let numbers = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)]
        let savedIndex = 0;
        let total = 0;
        for (const index in numbers) {
            if (numbers[index] < numbers[savedIndex]) {
                savedIndex = index
            }
        }
        numbers.splice(savedIndex)
        for (const index in numbers) {
            total += numbers[index]
        }
        return total
    }

    return (
        <div id="Menu">
            <AbilityScore character={character} setCharacter={setCharacter} abilityScore="str" abilityScoreName="Strength" currentPage={currentPage} setCurrentPage={setCurrentPage}></AbilityScore>
            <AbilityScore character={character} setCharacter={setCharacter} abilityScore="dex" abilityScoreName="Dexterity"></AbilityScore>
            <AbilityScore character={character} setCharacter={setCharacter} abilityScore="con" abilityScoreName="Constituion"></AbilityScore>
            <AbilityScore character={character} setCharacter={setCharacter} abilityScore="int" abilityScoreName="Intelligence"></AbilityScore>
            <AbilityScore character={character} setCharacter={setCharacter} abilityScore="wis" abilityScoreName="Wisdom"></AbilityScore>
            <AbilityScore character={character} setCharacter={setCharacter} abilityScore="char" abilityScoreName="Charisma"></AbilityScore>
        </div>
    );
}

export default AbilityScoresMenu;
