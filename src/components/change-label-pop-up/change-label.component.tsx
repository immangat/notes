import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import {NotesContext} from "../../contexts/notes.context";


type ChangeLabelPropsType = {
    addLabels: (label: string[]) => void
}

const makeIntitialCheckedData = (labels: string[]) => {
    var temp: { [key: string]: boolean } = {}
    labels.forEach(item => {
        temp[item] = false;
    })
    return temp;
}
const ChangeLabel = ({addLabels}: ChangeLabelPropsType) => {
    const {labels} = useContext(NotesContext)
    const [checkedData, setCheckedData] = useState(makeIntitialCheckedData(labels))
    console.log(checkedData)
    const onClickCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        const {target: {id}} = e
        setCheckedData(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }
    useEffect(() => {
        var labels: string[] = []
        var keys = Object.keys(checkedData)
        keys.forEach(key => {
            if (checkedData[key]) {
                labels.push(key)
            }
        })
        addLabels(labels)
    }, [checkedData])
    const labelsElements = labels.map(item =>
        <>
            <div
                style={{
                    display: "flex",
                }}
            >
                <input
                    type='checkbox'
                    id={item}
                    checked={checkedData[item]}
                    onChange={onClickCheckBox}

                />
                <label htmlFor={item}>{item}</label>
            </div>
        </>
    )

    return (
        <div
            style={{
                backgroundColor: "white",
                position: "absolute",
                top: "19px",
                zIndex: "999",
                border: "1px solid black",
                padding: "10%"
            }}
        >
            <span>
                Label Note
            </span>
            <div style={{
                marginTop: "4%"
            }}>
                {labelsElements}
            </div>

        </div>
    )
}

export default ChangeLabel;