import React, {ReactElement, useContext, useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import Note from "../Note/note.component";
import CreateNote from "../create-note/create-note.component";
import {NotesContext} from "../../contexts/notes.context";
import PreviewNote from "../preview-note/preview-note.component";
import {
    ContainerOfNoteContainer,
    CreateNoteGridItem,
    DirectoryContainer,
    NotesContainer,
    NotesContainerTest,
    NotesGridItem,
    NotesItem
} from "./directory.styles";

export type NoteType = {
    id: string,
    title: string,
    body: string
}

const DirectoryTest = () => {

    console.log()

    const {notes, addNote, deleteNote} = useContext(NotesContext)


    //const [number, setNumber] = useState(0)
    const [notes1, setNotes1] = useState<ReactElement[]>([])
    const handlePlusClick = () => {
        const note: NoteType = {
            id: nanoid(),
            title: "",
            body: ""
        }
        addNote(note)
    }

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

export default DirectoryTest;
