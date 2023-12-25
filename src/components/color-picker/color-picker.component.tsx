import React, {useContext} from 'react';
import {ColorPickerCircle} from "./color-picker.styles";
import {NotesContext} from "../../contexts/notes.context";

const colorsArray = [
    { name: "Light Gray", hex: "#CCCCCC" },    // Light Gray
    { name: "Light Green", hex: "#B7E1CD" },   // Light Green
    { name: "Light Blue", hex: "#ADD8E6" },    // Light Blue
    { name: "Light Yellow", hex: "#FFFFCC" },  // Light Yellow
    { name: "Light Pink", hex: "#FFCCFF" },    // Light Pink
    { name: "Light Cyan", hex: "#E0FFFF" },    // Light Cyan
    { name: "Light Purple", hex: "#D8BFD8" }   // Light Purple
];

type ColorPickerPropsType = {
    noteID: string
}
const ColorPicker = ({noteID}: ColorPickerPropsType) => {

    const {setNoteColor} = useContext(NotesContext)
    const colors = colorsArray.map(color => <ColorPickerCircle title={color.name} color={color.hex}
                                                               onClick={() => setNoteColor(noteID, color.hex)}/>)

    return (
        <div
            style={{
                backgroundColor: "white",
                position: "absolute",
                bottom: "2.2rem",
                left: "0rem",
                zIndex: "999",
                padding: "0.2rem",
                boxShadow: "rgba(99, 99, 99, 0.2) 8px 8px 8px 8px",
                display: "flex",
                flexDirection: "row"
            }}
        >
            {colors}

        </div>

    );
};

export default ColorPicker;