import React, {useContext} from 'react';
import {NotesContext} from "../../contexts/notes.context";
import {BsArchive} from 'react-icons/bs'
import BasicDirectory from "../../components/basic-directory/basic-directory.component";
import EmptyMessage from "../../components/empty-message/empty-message.component";

const Archive = () => {
    const {notes} = useContext(NotesContext)
    const archive = notes.filter(note => note.markedForArchive)
    if (!archive.length) {
        return (
            <EmptyMessage
                message={"Your Archive is Empty."}
                Icon={BsArchive}
            />
        )
    }
    return (
        <div>
            <BasicDirectory notes={archive} showNote={false}/>
        </div>
    );
};

export default Archive;