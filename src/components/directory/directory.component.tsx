import React, {ReactElement, useContext, useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import Note from "../Note/note.component";
import CreateNote from "../create-note/create-note.component";
import {NotesContext} from "../../contexts/notes.context";
import PreviewNote from "../preview-note/preview-note.component";
import {CreateNoteGridItem, DirectoryContainer, NotesContainer, NotesGridItem, NotesItem} from "./directory.styles";

export type NoteType = {
    id: string,
    title: string,
    body: string
}

const Directory = () => {

    const {notes, addNote, deleteNote} = useContext(NotesContext)


    //const [number, setNumber] = useState(0)
    const [notes1, setNotes1] = useState<ReactElement[]>([])
    const [notes2, setNotes2] = useState<ReactElement[]>([])
    const [notes3, setNotes3] = useState<ReactElement[]>([])
    const [notes4, setNotes4] = useState<ReactElement[]>([])
    const [notes5, setNotes5] = useState<ReactElement[]>([])
    const [notes6, setNotes6] = useState<ReactElement[]>([])
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
        setNotes2([])
        setNotes3([])
        setNotes4([])
        setNotes5([])
        setNotes6([])

        let count = 0
        notes.forEach(noteContent => {
                switch (count % 6) {
                    case 0:
                        setNotes1(
                            prevNotes => [...prevNotes, <PreviewNote
                                key={noteContent.id}
                                noteContent={noteContent}
                                handleDelete={() => deleteNoteFromArray(noteContent.id, 1)}
                            />]
                        )
                        break;
                    case 1:
                        setNotes2(
                            prevNotes => [...prevNotes, <PreviewNote
                                key={noteContent.id}
                                noteContent={noteContent}
                                handleDelete={() => deleteNoteFromArray(noteContent.id, 1)}

                            />]
                        )
                        break;
                    case 2:
                        setNotes3(
                            prevNotes => [...prevNotes, <PreviewNote
                                key={noteContent.id}
                                noteContent={noteContent}
                                handleDelete={() => deleteNoteFromArray(noteContent.id, 1)}

                            />]
                        )
                        break;
                    case 3:
                        setNotes4(
                            prevNotes => [...prevNotes, <PreviewNote
                                key={noteContent.id}
                                noteContent={noteContent}
                                handleDelete={() => deleteNoteFromArray(noteContent.id, 1)}
                            />]
                        )
                        break
                    case 4:
                        setNotes5(
                            prevNotes => [...prevNotes, <PreviewNote
                                key={noteContent.id}
                                noteContent={noteContent}
                                handleDelete={() => deleteNoteFromArray(noteContent.id, 1)}
                            />]
                        )
                        break
                    case 5:
                        setNotes6(
                            prevNotes => [...prevNotes, <PreviewNote
                                key={noteContent.id}
                                noteContent={noteContent}
                                handleDelete={() => deleteNoteFromArray(noteContent.id, 1)}
                            />]
                        )

                }
                count++
            }
        )
    }, [notes])


    return (
        <DirectoryContainer>
            <CreateNoteGridItem>
                < CreateNote/>
            </CreateNoteGridItem>
            <NotesGridItem>
                <NotesContainer style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "start",
                    height: "100%"
                }}>
                    <NotesItem
                    >
                        {notes1}
                    </NotesItem>
                    <NotesItem
                    >
                        {notes2}
                    </NotesItem>
                    <NotesItem
                    >
                        {notes3}
                    </NotesItem>

                    <NotesItem
                    >
                        {notes4}
                    </NotesItem>
                    <NotesItem
                    >
                        {notes5}
                    </NotesItem>
                    <NotesItem
                    >
                        {notes6}
                    </NotesItem>
                </NotesContainer>
            </NotesGridItem>
        </DirectoryContainer>
    );
}

export default Directory;
