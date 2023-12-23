import React, {useContext} from 'react';
import {NotesContext} from "../../contexts/notes.context";
import {BsFillTrashFill} from "react-icons/bs";
import BasicDirectory from "../../components/basic-directory/basic-directory.component";

const Archive = () => {
    const {notes} = useContext(NotesContext)
    const archive = notes.filter(note => note.markedForArchive)
    if (!archive.length) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                flexDirection: "column"
            }}>
                <BsFillTrashFill size={100}/>
                <h1>Your Archive is Empty </h1>

            </div>
        )
    }
    return (
        <div>
            <h1
                style={{
                    textAlign: "center",
                    margin: "0"
                }}
            >This is Archive</h1>
            <BasicDirectory notes={archive} showNote={false}/>
        </div>
    );
};

export default Archive;