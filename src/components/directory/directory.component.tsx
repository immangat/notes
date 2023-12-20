import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {NotesContext} from "../../contexts/notes.context";

import BasicDirectory, {NoteType} from "../basic-directory/basic-directory.component";

const Directory = () => {
    const {notes} = useContext(NotesContext)
    const notesToDisplay = notes.filter(note => !note.markedForTrash)
  
    return <BasicDirectory
        notes={notesToDisplay}
        showNote={true}
    />
}

export default Directory;
