import React, {useContext} from 'react';

import {NotesContext} from "../../contexts/notes.context";
import BasicDirectory from "../basic-directory/basic-directory.component";

type SearchDirectoryType = {
    stringToSearch: string
}
const SearchDirectory = (props: SearchDirectoryType) => {
    const {getNotes} = useContext(NotesContext)
    const notes = getNotes(props.stringToSearch)
    return <BasicDirectory notes={notes}/>
}

export default SearchDirectory;
