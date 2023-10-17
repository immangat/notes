import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import {NotesContext} from "../../contexts/notes.context";


type ChangeLabelPropsType = {
    addLabels: (e:ChangeEvent<HTMLInputElement>) => void
    checkedData: { [key: string]: boolean; }
}

const ChangeLabel = ({addLabels, checkedData}: ChangeLabelPropsType) => {


    const {labels} = useContext(NotesContext)
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
                    onChange={(e) => {
                        e.stopPropagation()
                        addLabels(e)
                    }}
                    onClick={(e) => {
                        e.stopPropagation()
                    }}

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