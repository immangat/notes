import React, {useContext} from 'react';
import {NotesContext} from "../../contexts/notes.context";
import BasicDirectory from "../../components/basic-directory/basic-directory.component";
import {BsFillTrashFill} from "react-icons/bs";
import {EmptyTrash} from "./trash.styles";

const Trash = () => {
    const {notes, emptyTrash} = useContext(NotesContext)
    const trash = notes.filter(note => note.markedForTrash)
    if (!trash.length) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                flexDirection: "column"
            }}>
                <BsFillTrashFill size={100}/>
                <h1>Your Trash is Empty </h1>

            </div>
        )
    }
    return (
        <div
        >
            <header
                style={{textAlign: "center"}}
            >
                <h1
                    style={{
                        margin: "0"
                    }}
                >This is trash</h1>
                <span>
                Notes in Trash are deleted after 7 days.
            </span>
                <EmptyTrash
                    onClick={emptyTrash}
                >
                    Empty Trash
                </EmptyTrash>

            </header>
            <BasicDirectory notes={trash} showNote={false}/>
        </div>
    );
};

export default Trash;