import {createContext, ReactNode, useState} from "react";


type NotesContextType = {
    labels: string[]
    addLabel: (label: string) => void
}
type LabelsProviderPropsType = {
    children: ReactNode
}

export const LabelsContext = createContext<NotesContextType>({
    labels: [],
    addLabel: (label: string) => {
    }
})

export const LabelsProviders = ({children}: LabelsProviderPropsType) => {
    const [labels, setLabels] = useState<string[]>([]);
    const addLabel = (label: string) => {
        setLabels(prevState => [...prevState, label])
    }
    const value = {labels, addLabel}

    return <LabelsContext.Provider value={value}>
        {children}
    </LabelsContext.Provider>
}