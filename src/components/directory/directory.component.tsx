import React, {useContext} from 'react';
import {NotesContext} from "../../contexts/notes.context";

import BasicDirectory from "../basic-directory/basic-directory.component";

const Directory = () => {
    const {notes} = useContext(NotesContext)
    const notesToDisplay = notes.filter(note => !note.markedForTrash && !note.markedForArchive && !note.notePinned)
    const notesPinned = notes.filter(note => !note.markedForTrash && !note.markedForArchive && note.notePinned)

    return (
        <>
            <BasicDirectory notes={notesPinned} showNote={false}/>
            <BasicDirectory
                notes={notesToDisplay}
                showNote={true}
            />
        </>
    )
}

export default Directory;
