import React, {useContext, useMemo,} from 'react';
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
    createdAt: string
    updatedAt: string
    labels: string[]
    markedForTrash?: boolean
    dateWhenMarkedForTrash?: string
    markedForArchive?: boolean
    dateWhenMarkedForArchive?: string
    notePinned?: boolean
}

export type BasicDirectoryPropsType = {
    notes: NoteType[]
    showNote: boolean
}


const BasicDirectory = ({notes, showNote}: BasicDirectoryPropsType) => {

    const {trashNote} = useContext(NotesContext)


    const getPreviewNotes = useMemo(() => {
        const deleteNoteFromArray = (key: string) => {
            trashNote(key)
        }
        return notes.map(noteContent => (
            <PreviewNote
                key={noteContent.id}
                noteContent={noteContent}
                handleDelete={() => deleteNoteFromArray(noteContent.id)}
            />
        ));
    }, [notes, trashNote]);

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
