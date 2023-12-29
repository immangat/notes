import {createContext, ReactNode, useState} from "react";


export type NavBarContextType = {
    reset: boolean
    resetURL: () => void
}
export const NavBarContext = createContext<NavBarContextType>({
    reset: false,
    resetURL: () => {
    }
})

type NavBarProviderPropsType = {
    children: ReactNode,
}

export const NavBarProvider = ({children}: NavBarProviderPropsType) => {

    const [reset, setReset] = useState(false)

    const resetURL = () => {
        setReset(prevValue => !prevValue)
    }

    const value = {reset, resetURL};
    return <NavBarContext.Provider value={value}>
        {children}
    </NavBarContext.Provider>

}