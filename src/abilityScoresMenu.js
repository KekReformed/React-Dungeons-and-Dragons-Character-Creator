import AbilityScore from './abilityScores';
//import './abilityScores.css';

function AbilityScoresMenu({ character, setAbilityScores }) {

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
            <AbilityScore character={character} abilityScore="str" setAbilityScores={setAbilityScores} abilityScoreName="Strength"></AbilityScore>
            <AbilityScore character={character} abilityScore="dex" setAbilityScores={setAbilityScores} abilityScoreName="Dexterity"></AbilityScore>
            <AbilityScore character={character} abilityScore="con" setAbilityScores={setAbilityScores} abilityScoreName="Constitution"></AbilityScore>
            <AbilityScore character={character} abilityScore="int" setAbilityScores={setAbilityScores} abilityScoreName="Intelligence"></AbilityScore>
            <AbilityScore character={character} abilityScore="wis" setAbilityScores={setAbilityScores} abilityScoreName="Wisdom"></AbilityScore>
            <AbilityScore character={character} abilityScore="char" setAbilityScores={setAbilityScores} abilityScoreName="Charisma"></AbilityScore>
        </div>
    );
}

export default AbilityScoresMenu;
