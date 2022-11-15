import { useEffect, useState } from 'react';
import './App.css';
import Race from './Race';
import Class from './Class';
import AbilityScoresMenu from './abilityScoresMenu'

function App() {

  class Character {
    constructor() {
      this.name = "???"
      this.race = ""
      this.subRace = { name: "???" }
      this.characterClass = { name: "???" }
      this.characterSubClass = { name: "???" }
      this.abilityScores = {
        "str": "???",
        "dex": "???",
        "con": "???",
        "int": "???",
        "wis": "???",
        "char": "???"
      }
    }
  }

  const [character, setCharacter] = useState(new Character())

  useEffect(() => {
    document.getElementById("raceName").innerHTML = character.subRace.name
    document.getElementById("className").innerHTML = character.characterClass.name
    document.getElementById("subClassName").innerHTML = character.characterSubClass.name
    document.getElementById("strScore").innerHTML = `Strength: ${character.abilityScores.str}` 
    document.getElementById("dexScore").innerHTML = "Dexterity: " + character.abilityScores.dex
    document.getElementById("conScore").innerHTML = "Constitution: " + character.abilityScores.con
    document.getElementById("intScore").innerHTML = "Intelligence: " + character.abilityScores.int
    document.getElementById("wisScore").innerHTML = "Wisdom: " + character.abilityScores.wis
    document.getElementById("charScore").innerHTML = "Charisma: " + character.abilityScores.char
  })

  let race = {
    name: "Human",
    "description": "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
    features: {
      "Age": "Humans reach adulthood in their late teens and live less than a century",
      "Size": "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
      "Speed": "Your base walking speed is 30 feet.",
      "Languages": "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on."
    },
    languages: ["Common", "any"],
    speed: 30,
    subRaces: [
      {
        name: "Standard Human",
        features: {
          "Ability Score Increase": "Your ability scores each increase by 1"
        },
        abilityScoreMod: {
          all: "1"
        }
      },
      {
        name: "Variant Human",
        features: {
          "Ability Score Increase": "Two different ability scores of your choice increase by 1",
          "Skills": "You gain proficiency in one skill of your choice",
          "Feat": "You gain one Feat of your choice"
        },
        abilityScoreMod: {
          choice: [1, 1]
        }
      },
      {
        name: "Variant Human: Mark of Finding",
        "description": "If your Human has the Mark of Finding, replace all Racial Traits found in the Player's Handbook with these, except for Age, Size, and Speed.",
        features: {
          "Ability Score Increase": "Your Wisdom score increases by 2, and your Constitution score increases by 1",
          "Darkvision": "You can see in dim light within 60ft. of you as if it were bright light, and in darkness as if it were dim light. You can't discern colors in darkness, only shades of grey.",
          "Hunter's Intuition": "Whenever you make a Wisdom (Perception) or a Wisdom (Survival) check, you can roll a d4 and add the number rolled to the total ability check.",
          "Finder's Magic": "You can cast the Hunter's Mark spell with this trait. Starting at 3rd level, you can also cast the Locate Object spell with it. Once you cast either spell with this trait, you can't cast that spell again until you finish a Long Rest. Wisdom is your Spellcasting Ability for these spells.",
          "Languages": "You can speak, read, and write Common and Goblin.",
          "Spells of the Mark": "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Finding Spells table are added to the spell list of your Spellcasting class"
        },
        abilityScoreMod: {
          wis: 2,
          con: 1,
        },
        languages: ["Common", "Goblin"],
        tableName: "Mark of Finding Spells",
        table: [["Spell Level", "Spell"], ["1st", "Faerie Fire, Longstrider"], ["2nd", "Locate Animals or Plants, Locate Object"], ["3rd", "Clairvoyance, Speak With Plants"], ["4th", "Divination, Locate Creature"], ["5th", "Commune With Nature"]]
      }
    ]
  }

  let characterClass = {
    name: "Sorcerer",
    "description": "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. No one chooses sorcery; the power chooses the sorcerer.",
    multiclassReq: {
      char: 13
    },
    spellcaster: true,
    features: {
      "Hit Dice": "1d6 per level",
      "HP at 1st Level": "6 + Constitution modifier",
      "HP at Higher levels": "1d6 (or just 4) + Constitution modifier per sorcerer level after 1st",
      "Spell Casting Ability": "Charisma"
    },
    "Proficiencies": {
      "Armor": "",
      "Weapons": "Daggers, darts, slings, quarterrstaffs and light crossbows",
      "Tools": "",
      "Saving Throws": "Constitution and Charisma",
      "Skills": "Choose two between amogus and joe mama"
    },
    "Equipment": ["A light crossbow and 20 bolts OR Any simple weapon", "A component pouch OR an arcane focus", "A dungeoneer's pack OR an explorer's pack", "Two daggers"],
    majorFeatures: {
      "Spellcasting": "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.",
      "Font of Magic": {
        "description": "At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.",
        bulletPoints: {
          "Sorcery Points": "You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.",
          "Flexible Casting": {
            "description": "Description Placeholder",
            "Creating Spell Slots": "You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. Any spell slot you create with this feature vanishes when you finish a long rest.",
            "Converting a Spell Slot to Sorcery Points": "As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level.",
            "table": [["Spell Slot Level", "Sorcery Point Cost"], ["1st", "2"], ["2nd", "3"], ["3rd", "5"], ["4th", "6"], ["5th", "7"]],
          },
        },
      },
      "Metamagic": {
        "description": "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level. \nYou can use only one Metamagic option on a spell when you cast it, unless otherwise noted",
        bulletPoints: {
          "Placeholder": "Placeholder",
          "Placeholder1": {
            "description": "Placeholder",
            "Placeholder": "Placeholder"
          },
          "Placeholder2": {
            "description": "Placeholder",
            "Placeholder": "Placeholder"
          },
          "Placeholder3": "Placeholder",
          "Placeholder4": "Placeholder",
        }
      }
    },
  }

  let raceList = [<Race race={race} character={character} setCharacter={setCharacter} />, <Race race={race} character={character} setCharacter={setCharacter} />]
  let classList = [<Class characterClass={characterClass} character={character} setCharacter={setCharacter}></Class>]
  let abilityScores = <AbilityScoresMenu character={character} setCharacter={setCharacter}></AbilityScoresMenu>
  let [currentPage, setCurrentPage] = useState(raceList)

  return (
    <div className="App">
      <div id='buttonContainer'>
        <h2 className='Button' onClick={() => setCurrentPage(raceList)}>Race</h2>
        <h2 className='Button' onClick={() => setCurrentPage(classList)}>Class</h2>
        <h2 className='Button' onClick={() => setCurrentPage(abilityScores)}>Ability Scores</h2>
      </div>
      <div id="CharacterContainer">
        <input id="CharacterName" placeholder="???"></input>
        <div id="CharacterDescriptionContainer">
          <div id="CharacterAttributeContainer">
            <div className='Attribute'>Race:</div>
            <div id="raceName" className='Attribute'></div>
          </div>
          <div id="CharacterAttributeContainer">
            <div className='Attribute'>Class:</div>
            <div id="className" className='Attribute'></div>
          </div>
          <div id="CharacterAttributeContainer">
            <div className='Attribute'>Subclass:</div>
            <div id="subClassName" className='Attribute'></div>
          </div>
          <div className="subTitle">Ability Scores</div>
          <div className="abilityScores" id="strScore">Intelligence: </div>
          <div className="abilityScores" id="dexScore">Intelligence: </div>
          <div className="abilityScores" id="conScore">Intelligence: </div>
          <div className="abilityScores" id="intScore">Intelligence: </div>
          <div className="abilityScores" id="wisScore">Intelligence: </div>
          <div className="abilityScores" id="charScore">Intelligence: </div>
        </div>
      </div>
      <div id="Menu">
        {currentPage}
      </div>
    </div>
  );
}

export default App;
