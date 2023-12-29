import React, {ReactElement, useContext, useEffect, useState} from 'react';

import {NotesContext} from "../../contexts/notes.context";
import BasicDirectory, {NoteType} from "../basic-directory/basic-directory.component";
import PreviewNote from "../preview-note/preview-note.component";
import {
    ContainerOfNoteContainer, NotesContainerTest,
} from "../basic-directory/basic-directory.styles";
import {SearchDirectoryContainer, SearchNotesGridItem} from "./search-directory.styles";

type SearchDirectoryType = {
    stringToSearch: string
    labelSearch: boolean
}
const SearchDirectory = (props: SearchDirectoryType) => {
    const {getNotes, trashNote, getNotesBasedUponLabel} = useContext(NotesContext)
    var notes: NoteType[];
    if (!props.labelSearch) {
        notes = getNotes(props.stringToSearch)
    } else {
        notes = getNotesBasedUponLabel(props.stringToSearch)
    }



    useEffect(() => {
        if (!props.labelSearch) {
            notes = getNotes(props.stringToSearch)
        } else {
            notes = getNotesBasedUponLabel(props.stringToSearch)
        }
    }, [props])


    return (
        <BasicDirectory notes={notes} showNote={false}/>
    );
}

export default SearchDirectory;
