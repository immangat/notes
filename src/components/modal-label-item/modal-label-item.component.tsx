import {CrossIcon} from "../preview-note/preview-note.styles";
import {BsXSquare, BsXSquareFill} from "react-icons/bs";
import React, {useState} from "react";


type ModalLabelItemPropsType = {
    label: string
    deleteLabel: () => void
}
const ModalLabelItem = ({label, deleteLabel}: ModalLabelItemPropsType) => {

    const [isShown, setIsShown] = useState(false)

    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
                alignItems: "center"

            }}
        >
            <h3>{label}</h3>
            <CrossIcon
                style={{
                    display: "block"
                }}
                onClick={() => {
                    deleteLabel()
                }}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                {isShown
                    ?
                    <BsXSquare/>
                    :
                    <BsXSquareFill/>}

            </CrossIcon>
        </div>
    )
}

export default ModalLabelItem