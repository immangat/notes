import React, {ReactElement, useContext, useEffect, useState} from 'react';

import {NotesContext} from "../../contexts/notes.context";
import BasicDirectory, {NoteType} from "../basic-directory/basic-directory.component";
import PreviewNote from "../preview-note/preview-note.component";
import {
    ContainerOfNoteContainer,
    CreateNoteGridItem,
    DirectoryContainer, NotesContainerTest,
    NotesGridItem
} from "../basic-directory/basic-directory.styles";
import CreateNote from "../create-note/create-note.component";
import {SearchDirectoryContainer, SearchNotesGridItem} from "./search-directory.styles";

type SearchDirectoryType = {
    stringToSearch: string
    labelSearch: boolean
}
const SearchDirectory = (props: SearchDirectoryType) => {
    const {getNotes, deleteNote, getNotesBasedUponLabel} = useContext(NotesContext)
    var notes: NoteType[];
    if (!props.labelSearch) {
        notes = getNotes(props.stringToSearch)
    } else {
        notes = getNotesBasedUponLabel(props.stringToSearch)
    }


    //const [number, setNumber] = useState(0)
    const [notes1, setNotes1] = useState<ReactElement[]>([])
    const deleteNoteFromArray = (key: string, array: number) => {
        deleteNote(key)
    }


    useEffect(() => {
        setNotes1([])
        notes.forEach(noteContent => {
                setNotes1(
                    prevNotes => [...prevNotes, <PreviewNote
                        key={noteContent.id}
                        noteContent={noteContent}
                        handleDelete={() => deleteNoteFromArray(noteContent.id, 1)}
                    />]
                )
            }
        )
    }, [props])


    return (
        <SearchDirectoryContainer>
            <SearchNotesGridItem>
                <ContainerOfNoteContainer>
                    <NotesContainerTest>
                        {notes1}
                    </NotesContainerTest>
                </ContainerOfNoteContainer>
            </SearchNotesGridItem>
        </SearchDirectoryContainer>
    );
}

export default SearchDirectory;
