import React, {useContext, useEffect, useState} from 'react';
import {NotesContext} from "../../contexts/notes.context";

import BasicDirectory, {NoteType} from "../basic-directory/basic-directory.component";

const Directory = () => {
    const {notes} = useContext(NotesContext)
    const [notesInDirectory, setNotesInDirectory] = useState<NoteType[]>([])

    useEffect(() => {
        setNotesInDirectory(notes)
        console.log("notes from directory", notes)
    }, [notes])
    return <BasicDirectory
        notes={notesInDirectory}
        showNote={true}
    />
}

export default Directory;
