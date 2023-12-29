import React, {useContext, useMemo,} from 'react';
import CreateNote from "../create-note/create-note.component";
import {NotesContext} from "../../contexts/notes.context";
import PreviewNote from "../preview-note/preview-note.component";
import {
    ContainerOfNoteContainer,
    CreateNoteGridItem,
    DirectoryContainer,
    NotesContainerTest,
    NotesGridItem, PinnedMessage,
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
    noteColor?: string
}

export type BasicDirectoryPropsType = {
    notes: NoteType[]
    showNote: boolean
}


const BasicDirectory = ({notes, showNote}: BasicDirectoryPropsType) => {

    const {trashNote} = useContext(NotesContext)
    const notesPinned = notes.filter(note => note.notePinned)
    const notPinned = notes.filter(note => !note.notePinned)
    console.log(notes)

    const getPreviewNotes = useMemo(() => {
        const deleteNoteFromArray = (key: string) => {
            trashNote(key)
        }
        return notPinned.map(noteContent => (
            <PreviewNote
                key={noteContent.id}
                noteContent={noteContent}
                handleDelete={() => deleteNoteFromArray(noteContent.id)}
            />
        ));
    }, [notPinned, trashNote, notes]);

    const getPinnedNotes = useMemo(() => {
        const deleteNoteFromArray = (key: string) => {
            trashNote(key)
        }
        return notesPinned.map(noteContent => (
            <PreviewNote
                key={noteContent.id}
                noteContent={noteContent}
                handleDelete={() => deleteNoteFromArray(noteContent.id)}
            />
        ));
    }, [notesPinned, trashNote, notes])
    console.log(getPinnedNotes)

    return (
        <DirectoryContainer>
            {
                showNote &&
                <CreateNoteGridItem>
                    < CreateNote/>
                </CreateNoteGridItem>

            }
            <NotesGridItem>
                {
                    notesPinned.length !== 0
                    &&
                    <ContainerOfNoteContainer>
                        <PinnedMessage>Pinned</PinnedMessage>
                        <NotesContainerTest>
                            {getPinnedNotes}
                        </NotesContainerTest>
                    </ContainerOfNoteContainer>
                }
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
