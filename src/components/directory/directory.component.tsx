import React, {useContext} from 'react';
import {NotesContext} from "../../contexts/notes.context";

import BasicDirectory from "../basic-directory/basic-directory.component";

const Directory = () => {
    const {notes} = useContext(NotesContext)
    const notesToDisplay = notes.filter(note => !note.markedForTrash && !note.markedForArchive)
  
    return <BasicDirectory
        notes={notesToDisplay}
        showNote={true}
    />
}

export default Directory;
