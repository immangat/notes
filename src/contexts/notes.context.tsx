import {createContext, useState, ReactNode, useEffect, useContext} from "react"
import React from "react";
import {NoteType} from "../components/basic-directory/basic-directory.component";
import {UserContext} from "./user.context";
import {
    createListerToNoteDatabase,
    createNoteDocument,
    getNoteData,
    NoteDocumentType,
    updateNotes
} from "../utils/firebase/firebase.utils";


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
    getNotes: (searchString: string) => NoteType[]
    createNote: boolean,
    eventIncoming: () => void
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
    getNotes: (searchString: string) => [],
    createNote: false,
    eventIncoming: () => {
    }
})


const intitalNotesState = () => {
    const notes = localStorage.getItem("notes");
    if (typeof notes === 'string' && notes.trim() !== '') {
        try {
            return JSON.parse(notes);
        } catch (error) {
            console.error('Error parsing notes:', error);
            return [];
        }
    } else {
        console.log('Notes is not a non-empty string, returning an empty array.');
        return [];
    }
}
export const NotesProvider = ({children}: NotesProviderPropsType) => {
    const [notes, setNotes] = useState<NoteType[]>(intitalNotesState())
    const [modalProps, setModalProps] = useState<ModalPropsType>({
        key: "",
        open: false
    })

    const [createNote, setCreateNote] = useState(false)

    const {user} = useContext(UserContext)

    const initNotes = async (userID: string) => {
        await createNoteDocument(userID)
        // const noteDocument = await getNoteData(userID)
        // const {notes} = noteDocument as NoteDocumentType
        // addNotesFromFirbase(notes)
        return await createListerToNoteDatabase(userID, addNotesFromFirbase)
    }


    const addNote = (note: NoteType) => {
        setNotes(prevNotes => [...prevNotes, note])
    }

    const getNotes = (searchString: string) => {

        const regex = new RegExp(searchString, 'i'); // 'i' flag makes the regex case-insensitive
        if (!searchString) {
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


    const addNotesFromFirbase = (notes: NoteType[]) => {
        setNotes(notes)
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

    const eventIncoming = () => {
        setCreateNote(prev => !prev)
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
        if (user) {
            updateNotes(user.userId, notes)
        }
    }, [notes])
    const value = {
        notes,
        addNote,
        deleteNote,
        getNote,
        updateNote,
        modalProps,
        setKeyOfModalProp,
        clearModalProps,
        getNotes,
        createNote,
        eventIncoming
    }

    useEffect(() => {
        let unsubscribe: any;
        if (user) {
            unsubscribe =  initNotes(user.userId)
        }
        return () => {
            if (unsubscribe) {
               unsubscribe();
            }
        }
    }, [user])

    return <NotesContext.Provider value={value}>
        {children}
    </NotesContext.Provider>
}