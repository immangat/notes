import {createContext, ReactNode, useState} from "react";


export const SideBarContext = createContext(
    {
        isOpen: false,
        setState: () => {
        }
    }
)


export const SideBarProvider = ({children}: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const setState = () => {
        setIsOpen(prev => !prev)
    }
    const value = {isOpen, setState}
    return <SideBarContext.Provider value={value}>
        {children}
    </SideBarContext.Provider>
}