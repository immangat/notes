import {createContext, ReactNode, useState} from "react";

type SelectProviderPropsType = {
    children: ReactNode
}

type SelectContextType = {
    selectedNotes: string[]
    addNoteToSelectedNotes: (noteID: string) => void,
    removeNoteFromSelectedNotes: (noteID: string) => void
}

export const SelectNotesContext = createContext<SelectContextType>({
    selectedNotes: [],
    addNoteToSelectedNotes: (noteID: string) => null,
    removeNoteFromSelectedNotes: (noteID: string) => null
})


export const SelectNotesProvider = ({children}: SelectProviderPropsType) => {

    const [selectedNotes, setSelectedNotes] = useState<string[]>([])
    console.log("notes", selectedNotes)
    const addNoteToSelectedNotes = (noteID: string) => setSelectedNotes(prev => [...prev, noteID])
    const removeNoteFromSelectedNotes = (noteID: string) => setSelectedNotes(prev => prev.filter(id => id !== noteID))
    const value = {selectedNotes, addNoteToSelectedNotes, removeNoteFromSelectedNotes}
    return <SelectNotesContext.Provider value={value}>
        {children}
    </SelectNotesContext.Provider>
}