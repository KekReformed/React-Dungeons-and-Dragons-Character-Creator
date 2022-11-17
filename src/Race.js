import { useState } from 'react';
import './Race.css';

function Race({ race, character, setRaceName }) {

    const [visibile, setVisible] = useState(false)
    const visibility = visibile ? "visible" : "hidden"
    const subRaces = []

    //Format the features into JSX
    function featureFormating(features) {
        let JSXList = []
        for (const feature in features) {
            JSXList.push(
                <li><strong>{feature}: </strong> {features[feature]}</li>
            )
        }
        return JSXList
    }


    //Format the 2D array into an actual JSX table
    function tableFormating(table) {
        let JSXList = []
        for (const columnIndex in table) {
            let row = table[columnIndex]


            let tempList = []
            for (const rowIndex in row) {
                let cell = row[rowIndex]
                if (columnIndex < 1) tempList.push(<th>{cell}</th>)
                else tempList.push(<td>{cell}</td>)
            }
            JSXList.push(<tr>{tempList}</tr>)
        }
        return JSXList
    }

    for (const index in race.subRaces) {
        let subRace = race.subRaces[index]

        subRaces.push(<div id='SubRaceContainer'>
            <div id="SubRace">
                <h2 id='RaceName'>{subRace.name}</h2>
                <div id="RaceDescription"> {subRace.description} </div>
                <ul>
                    {featureFormating(subRace.features)}
                </ul>
                <div id="RaceDescription">
                    {subRace.tableName}
                </div>
                <div id="tableContainer">
                    <tbody>
                        {tableFormating(subRace.table)}
                    </tbody>
                </div>
                <div id="SelectRaceButton" onClick={(e) => {
                    e.stopPropagation()
                    character.race = race
                    character.subRace.name = subRace.name
                    setRaceName(subRace.name)
                }}>
                    Select
                </div>
            </div>
        </div>)
    }

    
    function toggleVisibility() {
        setVisible(current => !current)
    }

    return (
        <div id='RaceContainer' onClick={toggleVisibility}>
            <div id='RaceName'>{race.name}</div>
            <div id="RaceDescriptionContainer" className={visibility}>
                <div id="RaceDescription"> {race.description} </div>
                <div id="RaceFeatures">
                    <h1>{race.name} Features</h1>
                    <ul>
                        {featureFormating(race.features)}
                    </ul>
                    <div id="RaceDescription">
                        {race.tableName}
                    </div>
                    <tbody>
                        {tableFormating(race.table)}
                    </tbody>
                </div>
                {subRaces}
            </div>
        </div>
    );
}

export default Race;
