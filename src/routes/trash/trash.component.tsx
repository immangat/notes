import React, {useContext} from 'react';
import {NotesContext} from "../../contexts/notes.context";
import BasicDirectory from "../../components/basic-directory/basic-directory.component";
import {BsFillTrashFill} from "react-icons/bs";
import {EmptyTrash} from "./trash.styles";
import EmptyMessage from "../../components/empty-message/empty-message.component";

const Trash = () => {
    const {notes, emptyTrash} = useContext(NotesContext)
    const trash = notes.filter(note => note.markedForTrash)
    if (!trash.length) {
        return (
            <EmptyMessage
                Icon={BsFillTrashFill}
                message={"Your Trash is Empty."}
            />

        )
    }
    return (
        <div
        >
            <header
                style={{textAlign: "center"}}
            >
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