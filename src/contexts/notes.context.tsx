import {createContext, useState, ReactNode, useEffect, useContext} from "react"
import React from "react";
import {NoteType} from "../components/basic-directory/basic-directory.component";
import {UserContext} from "./user.context";
import {
    createListerToNoteDatabase,
    createNoteDocument,
    updateLabels,
    updateNotes
} from "../utils/firebase/firebase.utils";


export type ModalPropsType = {
    open: boolean
    key: string
    labelOpen: boolean
}
export type NotesContextType = {
    notes: NoteType[]
    addNote: (note: NoteType) => void
    deleteNote: (key: string) => void
    getNote: (key: string) => NoteType
    updateNote: (key: string, updatedAt: string, labels?: string[], title?: string, body?: string) => void
    modalProps: ModalPropsType
    setKeyOfModalProp: (key: string) => void
    clearModalProps: () => void
    getNotes: (searchString: string) => NoteType[]
    createNote: boolean,
    eventIncoming: () => void
    clearAllNotes: () => void
    labels: string[]
    addLabels: (labels: string[]) => void
    getLabelsOfANote: (noteID: string) => string[]
    toggleLabelModal: () => void
    deleteFromAllNotes: (label: string) => void
    getNotesBasedUponLabel: (label: string) => NoteType[]
    loading: boolean

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
        body: "",
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
        labels: []
    }),
    updateNote: (key: string, updatedAt: string, labels?: string[], title?: string, body?: string) => null,
    modalProps: {
        key: "",
        open: false,
        labelOpen: false

    },
    setKeyOfModalProp: (key: string) => null,
    clearModalProps: () => null,
    getNotes: (searchString: string) => [],
    createNote: false,
    eventIncoming: () => {
    },
    clearAllNotes: () => {
    },
    labels: [],
    addLabels: (labels: string[]) => {
    },
    getLabelsOfANote: (noteID) => [],

    toggleLabelModal: () => {
    },
    deleteFromAllNotes: (label: string) => {

    },
    getNotesBasedUponLabel: (label: string) => [],
    loading: false
})


const intitalNotesState = () => {
    const notes = sessionStorage.getItem("notes");
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
    const [notes, setNotes] = useState<NoteType[]>(() => intitalNotesState())
    const [modalProps, setModalProps] = useState<ModalPropsType>({
        key: "",
        open: false,
        labelOpen: false
    })

    const [createNote, setCreateNote] = useState(false)
    const [labels, setLabels] = useState<string[]>([]);
    const [loading, setLoading] = useState(false)

    const addLabels = (labels: string[]) => {
        setLabels(labels)
    }

    const {user} = useContext(UserContext)

    const initNotes = async (userID: string) => {
        setLoading(true)
        await createNoteDocument(userID)
        setTimeout(() => {
            setLoading(false)
        }, 500)
        // const noteDocument = await getNoteData(userID)
        // const {notes} = noteDocument as NoteDocumentType
        // addNotesFromFirbase(notes)
        return await createListerToNoteDatabase(userID, addNotesFromFirbase)
    }


    const clearAllNotes = () => {
        setNotes([])
        setLabels([])
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

    const getNotesBasedUponLabel = (label: string) => {
        return notes.filter(note => note.labels.indexOf(label) > -1)
    }
    const deleteNote = (key: string) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== key))
        clearModalProps()
    }

    const getNote = (key: string) => {
        return notes.find(note => note.id === key) as NoteType;
    }

    const updateNote = (key: string, updatedAt: string, labels?: string[], title?: string, body?: string) => {
        if (title && body && labels) {
            setNotes(prevNotes => prevNotes.map(note => {
                if (note.id === key) {
                    return {
                        ...note,
                        title: title,
                        body: body,
                        updatedAt: updatedAt,
                        labels: labels
                    }
                }
                return note
            }))
            return
        }


        if (title && body) {
            setNotes(prevNotes => prevNotes.map(note => {
                if (note.id === key) {
                    return {
                        ...note,
                        title: title,
                        body: body,
                        updatedAt: updatedAt
                    }
                }
                return note
            }))
            return
        }

        if (labels) {
            setNotes(prevNotes => prevNotes.map(note => {
                if (note.id === key) {
                    return {
                        ...note,
                        labels: labels,
                        updatedAt: updatedAt
                    }
                }
                return note
            }))
        }

    }


    const updateLabelsForNote = (key: string, updatedAt: Date, labels: string[]) => {
        setNotes(prevNotes => prevNotes.map(note => {
            if (note.id === key) {
                return {
                    ...note,
                    labels: labels,
                    updatedAt: updatedAt.toString()
                }
            }
            return note
        }))
    }

    const addNotesFromFirbase = (notes: NoteType[], labels: string[]) => {
        setNotes(notes)
        setLabels(labels)
    }
    const setKeyOfModalProp = (key: string) => {
        setModalProps(prev => ({
            ...prev,
            open: true,
            key: key,
        }))
    }

    const clearModalProps = () => {
        setModalProps(prev => ({
            ...prev,
            open: false,
            key: '',
        }))
    }

    const toggleLabelModal = () => {
        setModalProps(prev => ({
            ...prev,
            labelOpen: !prev.labelOpen,
        }))
    }

    const eventIncoming = () => {
        setCreateNote(prev => !prev)
    }

    const deleteFromAllNotes = (label: string) => {
        setNotes(notes => notes.map(note => {
            const tempNote = note
            const index = tempNote.labels.indexOf(label)
            if (index > -1) {
                tempNote.labels.splice(index, 1)
            }
            return tempNote
        }))
    }

    const getLabelsOfANote = (noteID: string) => {
        return notes.find(note => note.id === noteID)?.labels || []
    }

    useEffect(() => {
        if (user) {
            console.log("Updating the note")
            updateNotes(user.userId, notes)
        }
    }, [notes])

    useEffect(() => {
        if (user) {
            updateLabels(user.userId, labels)
        }
    }, [labels])
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
        eventIncoming,
        clearAllNotes,
        labels,
        addLabels,
        toggleLabelModal,
        deleteFromAllNotes,
        getNotesBasedUponLabel,
        loading,
        getLabelsOfANote
    }

    useEffect(() => {
        let unsubscribe: any;
        if (user) {
            setLoading(true)
            unsubscribe = initNotes(user.userId)

        }
        return () => {
            if (unsubscribe) {
                unsubscribe
                    .then((item: () => any) => item())
            }
        }
    }, [user])

    return <NotesContext.Provider value={value}>
        {children}
    </NotesContext.Provider>
}