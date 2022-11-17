import { useState } from 'react';
import './Class.css';

function Class({ characterClass, character, setClassName, setSubClassName }) {

    const [visibile, setVisible] = useState(false)
    const visibility = visibile ? "visible" : "hidden"
    const subRaces = []

    //Format the features into JSX
    function featureFormating(features) {
        let JSXList = []
        for (const feature in features) {
            JSXList.push(
                <li><strong>{feature}: </strong> {features[feature] ? features[feature] : "None"}</li>
            )
        }
        return JSXList
    }

    //Format nested lists into HTML
    function listFormating(list) {
        let JSXList = []
        for (const item in list) {
            if (item === "description") continue
            if (typeof list[item] === "string") {
                JSXList.push(
                    <ul><li><strong>{item}: </strong> {list[item]}</li></ul>
                )
            }
            else if (item === "table") {
                JSXList.push(
                    <tbody>
                        {tableFormating(list[item])}
                    </tbody>
                )
            }
            else {
                JSXList.push(
                    <ul>
                        <li id="majorClassFeatureName"><div id="RaceDescription"><strong>{item}</strong>: {list[item].description}</div></li>
                        {listFormating(list[item])}
                    </ul>
                )
            }
        }
        return JSXList
    }

    //Format the major class features into JSX
    function majorFeatureFormating(majorFeatures) {
        let JSXList = []
        for (const feature in majorFeatures) {
            if (typeof majorFeatures[feature] === "string") {
                JSXList.push(
                    <div id="majorClassFeatureName">{feature}: </div>,
                    <div id="RaceDescription">{majorFeatures[feature]}</div>
                )
            }
            else if (feature === "table") {
                JSXList.push(
                    <tbody>
                        {tableFormating(majorFeatures[feature])}
                    </tbody>
                )
            }
            else {
                JSXList.push(
                    <div id="majorClassFeatureName">{feature}: </div>,
                    <div id="RaceDescription">{majorFeatures[feature].description}</div>,
                    <div>{listFormating(majorFeatures[feature].bulletPoints)}</div>
                )
            }
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


    //Fomats equipment from the JSON 
    function equipmentFormating(features) {
        let JSXList = []
        for (const feature in features) {
            JSXList.push(
                <li>{features[feature]}</li>
            )
        }
        return JSXList
    }

    function toggleVisibility() {
        setVisible(current => !current)
    }

    return (
        <div id='RaceContainer' onClick={toggleVisibility}>
            <div id='RaceName'>{characterClass.name}</div>
            <div id="RaceDescriptionContainer" className={visibility}>
                <div id="RaceDescription"> {characterClass.description} </div>
                <div id="RaceFeatures">
                    <h1>{characterClass.name} Class Features</h1>
                    <ul>
                        {featureFormating(characterClass.features)}
                    </ul>
                    <h2>Proficiencies</h2>
                    <ul>
                        {featureFormating(characterClass["Proficiencies"])}
                    </ul>
                    <h2>Equipment</h2>
                    <ul>
                        {equipmentFormating(characterClass["Equipment"])}
                    </ul>
                    {majorFeatureFormating(characterClass.majorFeatures)}
                    <div id="RaceDescription">
                        <div id="SelectRaceButton" onClick={(e) => {
                            e.stopPropagation()
                            character.characterClass = characterClass
                            setClassName(characterClass.name)
                            if (characterClass.subclassLevel === 1) {
                                character.subClass.name = "Not Yet Unlocked"
                                setSubClassName("Not Yet Unlocked")
                            }
                        }}>
                            Select
                        </div>
                    </div>
                </div>
                {subRaces}
            </div>
        </div>
    );
}

export default Class;