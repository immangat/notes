import {createContext, useState, ReactNode, useEffect} from "react"
import React from "react";
import {NoteType} from "../components/basic-directory/basic-directory.component";


export type ModalPropsType = {
    open: boolean
    key: string
}
export type NotesContextType = {
    notes: NoteType[]
    addNote: (note: NoteType) => void
    deleteNote: (key: string) => void
    getNote: (key: string) => NoteType
    updateNote: (key: string, title: string, body: string) => void
    modalProps: ModalPropsType
    setKeyOfModalProp: (key: string) => void
    clearModalProps: () => void
    getNotes: (searchString : string) => NoteType[]
}

type NotesProviderPropsType = {
    children: ReactNode
}
export const NotesContext = createContext<NotesContextType>({
    notes: [],
    addNote: (note) => null,
    deleteNote: (key) => null,
    getNote: (key) => ({
        id: "",
        title: "",
        body: ""
    }),
    updateNote: (key: string, title: string, body: string) => null,
    modalProps: {
        key: "",
        open: false
    },
    setKeyOfModalProp: (key: string) => null,
    clearModalProps: () => null,
    getNotes: (searchString : string) => []
})


const intitalNotesState = () => {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
}
export const NotesProvider = ({children}: NotesProviderPropsType) => {
    const [notes, setNotes] = useState<NoteType[]>(intitalNotesState())
    const [modalProps, setModalProps] = useState<ModalPropsType>({
        key: "",
        open: false
    })


    const addNote = (note: NoteType) => {
        setNotes(prevNotes => [...prevNotes, note])
    }

    const getNotes = (searchString : string) => {
        console.log("Inside the get notes", searchString)
        const regex = new RegExp(searchString, 'i'); // 'i' flag makes the regex case-insensitive
        if(!searchString){
            return [];
        }
        return notes.filter(note => {
            return (
                regex.test(note.title) ||
                regex.test(note.body)
            );
        })
    }
    const deleteNote = (key: string) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== key))
    }

    const getNote = (key: string) => {
        return notes.find(note => note.id === key) as NoteType;
    }

    const updateNote = (key: string, title: string, body: string) => {
        setNotes(prevNotes => prevNotes.map(note => {
            if (note.id === key) {
                return {
                    ...note,
                    title: title,
                    body: body
                }
            }
            return note
        }))
    }

    const setKeyOfModalProp = (key: string) => {
        setModalProps({
            open: true,
            key: key
        })
    }

    const clearModalProps = () => {
        setModalProps({
            open: false,
            key: ""
        })
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    const value = {notes, addNote, deleteNote, getNote, updateNote, modalProps, setKeyOfModalProp, clearModalProps, getNotes}
    return <NotesContext.Provider value={value}>
        {children}
    </NotesContext.Provider>
}