import React, {ReactElement, useContext, useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import CreateNote from "../create-note/create-note.component";
import {NotesContext} from "../../contexts/notes.context";
import PreviewNote from "../preview-note/preview-note.component";
import {
    ContainerOfNoteContainer,
    CreateNoteGridItem,
    DirectoryContainer,
    NotesContainerTest,
    NotesGridItem,
} from "./basic-directory.styles";


export type NoteType = {
    id: string,
    title: string,
    body: string
}

export type BasicDirectoryPropsType = {
    notes: NoteType[]
}
const BasicDirectory = ({notes} : BasicDirectoryPropsType) => {

    console.log()

    const {addNote, deleteNote} = useContext(NotesContext)


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
    }, [notes])


    return (
        <DirectoryContainer>
            <CreateNoteGridItem>
                < CreateNote/>
            </CreateNoteGridItem>
            <NotesGridItem>
                <ContainerOfNoteContainer>
                    <NotesContainerTest>
                        {notes1}
                    </NotesContainerTest>
                </ContainerOfNoteContainer>
            </NotesGridItem>
        </DirectoryContainer>
    );
}

export default BasicDirectory;
