import React, {useContext} from 'react';
import {NotesContext} from "../../contexts/notes.context";

import BasicDirectory from "../basic-directory/basic-directory.component";

const Directory = () => {
    const {notes} = useContext(NotesContext)
    return <BasicDirectory
                notes={notes}
                showNote={true}
    />
}

export default Directory;
