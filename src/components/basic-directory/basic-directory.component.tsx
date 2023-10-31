import React, {ReactElement, useContext, useEffect, useMemo, useState} from 'react';
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
    createdAt: Date
    updatedAt: Date
    labels: string[]
}

export type BasicDirectoryPropsType = {
    notes: NoteType[]
    showNote: boolean
}


const BasicDirectory = ({notes, showNote}: BasicDirectoryPropsType) => {

    const {deleteNote} = useContext(NotesContext)
    

    const getPreviewNotes = useMemo(() => {
        const deleteNoteFromArray = (key: string) => {
            deleteNote(key)
        }
        console.log("Inside the memo hahahhahahah" + showNote)
        return notes.map(noteContent => (
            <PreviewNote
                key={noteContent.id}
                noteContent={noteContent}
                handleDelete={() => deleteNoteFromArray(noteContent.id)}
            />
        ));
    }, [notes, deleteNote]);

    return (
        <DirectoryContainer>
            {
                showNote &&
                <CreateNoteGridItem>
                    < CreateNote/>
                </CreateNoteGridItem>

            }

            <NotesGridItem>
                <ContainerOfNoteContainer>
                    <NotesContainerTest>
                        {getPreviewNotes}
                    </NotesContainerTest>
                </ContainerOfNoteContainer>
            </NotesGridItem>
        </DirectoryContainer>
    );
}

export default BasicDirectory;
