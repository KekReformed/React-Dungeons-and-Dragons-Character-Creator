import AbilityScore from './abilityScores';
//import './abilityScores.css';

function AbilityScoresMenu({ character, abilityScores, setAbilityScores }) {

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
            <AbilityScore character={character} abilityScore="str" abilityScores={abilityScores} setAbilityScores={setAbilityScores} abilityScoreName="Strength"></AbilityScore>
            <AbilityScore character={character} abilityScore="dex" abilityScores={abilityScores} setAbilityScores={setAbilityScores} abilityScoreName="Dexterity"></AbilityScore>
            <AbilityScore character={character} abilityScore="con" abilityScores={abilityScores} setAbilityScores={setAbilityScores} abilityScoreName="Constitution"></AbilityScore>
            <AbilityScore character={character} abilityScore="int" abilityScores={abilityScores} setAbilityScores={setAbilityScores} abilityScoreName="Intelligence"></AbilityScore>
            <AbilityScore character={character} abilityScore="wis" abilityScores={abilityScores} setAbilityScores={setAbilityScores} abilityScoreName="Wisdom"></AbilityScore>
            <AbilityScore character={character} abilityScore="char" abilityScores={abilityScores} setAbilityScores={setAbilityScores} abilityScoreName="Charisma"></AbilityScore>
        </div>
    );
}

export default AbilityScoresMenu;
