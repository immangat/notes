import React, {ChangeEvent, useContext} from "react";
import {NotesContext} from "../../contexts/notes.context";


type ChangeLabelPropsType = {
    addLabels: (e: ChangeEvent<HTMLInputElement>) => void
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
                onClick={(e) => {
                    e.stopPropagation()
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
                bottom: "2.2rem",
                left: "0rem",
                zIndex: "999",
                padding: "0.2rem",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            }}
        >
            <span
                style={{
                    width: "100%",
                    whiteSpace: "nowrap"
                }}
            >
                Label Notes
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