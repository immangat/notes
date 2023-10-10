import {createContext, ReactNode, useEffect, useState} from "react";
import "firebase/firestore";
import { DocumentData } from '@firebase/firestore-types'
import {createUserDocument, onAuthChangeListener} from "../utils/firebase/firebase.utils";

export type CustomUser = {
    userId: string
    userData?: DocumentData
}
type UserContextType = {
    user: CustomUser | null
    setCurrentUser: (user: CustomUser) => void

}

export const UserContext = createContext<UserContextType>({
    user: null,
    setCurrentUser: () => {
    }
})

type UserContextPropsType = {
    children: ReactNode
}


export const UserProvider = ({children}: UserContextPropsType) => {
    const [user, setUser] = useState<CustomUser | null>(null)

    const setCurrentUser = (user: CustomUser) => {
        setUser(user)
    }
    const value = {user, setCurrentUser}

    useEffect(() => {
        onAuthChangeListener(async (user) => {
            if(user){
            const userSnapShot = await createUserDocument(user)
            if(userSnapShot){
                setCurrentUser({
                    userId: userSnapShot.id,
                    userData: userSnapShot.data()
                })

            }
            }
        })
    }, [])
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}