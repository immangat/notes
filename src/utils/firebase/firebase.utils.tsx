import {initializeApp} from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    NextOrObserver,
    User,
    signOut
} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc, onSnapshot} from 'firebase/firestore'
import {DocumentData, DocumentReference} from '@firebase/firestore-types'
import {NoteType} from "../../components/basic-directory/basic-directory.component";
import firebase from "firebase/compat";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Use firebaseConfig in your Firebase initialization
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

githubProvider.setCustomParameters({
    prompt: 'select_account'
})


export const auth = getAuth();

export const signInWithgooglePopUp = async () => {
    try {
        console.log("Before the gooogle pop up")
        return await signInWithPopup(auth, googleProvider)
    } catch (e) {
        console.log("Error with google popUp", e)
    }
}

export const signInWithGithubPopUp = async () => {
    try {
        return await signInWithPopup(auth, githubProvider)
    } catch (e) {
        console.log("Error with Github popUp", e)
    }
}

export const db = getFirestore(firebaseApp);

export const createUserDocument = async (user: User) => {
    if (user?.uid) {
        const userDocRef = doc(db, 'users', user?.uid);
        const userSnapshot = await getDoc(userDocRef)
        if (!userSnapshot.exists()) {
            const {displayName, email, photoURL} = user
            const createdAt = new Date()
            try {
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt,
                    photoURL
                })
            } catch (e) {
                console.error('error creating the user Doc', e)
            }
        }

        return userSnapshot
    }
}

export const onAuthChangeListener = (callback: NextOrObserver<User | null>) => onAuthStateChanged(auth, callback)

export const  signOutUser = async () => signOut(auth)


/*
****************************************
Notes
****************************************
 */

/*
one to get the notes
 */

export type NoteDocumentType = {
    notes: NoteType[]
    createdAt: Date
}

export const createNoteDocument = async (userId: string) => {
    const noteDocRef = doc(db, 'notes', userId)
    const noteSnapshot = await getDoc(noteDocRef)
    if (!noteSnapshot.exists()) {
        const createdAt = new Date();
        const notes: NoteType[] = []
        try {
            await setDoc(noteDocRef, {
                createdAt,
                notes
            })
        } catch (e) {
            console.error("Error making a note doc for the user", e)
        }
    }
    return noteDocRef
}

/*
one to update the notes, we can just do bulk update
 */

export const updateNotes = async (userId: string, notes: NoteType[]) => {
    const noteDocRef = doc(db, 'notes', userId)
    const noteSnapshot = await getDoc(noteDocRef)
    try {
        await setDoc(noteDocRef, {
            notes: notes
        }, {merge: true})

    } catch (e) {
        console.error("Error when updated notes to database", e)
    }
}

export const getNoteData = async (userId: string) => {
    const noteDocRef = doc(db, 'notes', userId)
    const noteSnapshot = await getDoc(noteDocRef)
    try {
        return noteSnapshot.data();
    } catch (e) {
        console.error("error gettin the docs", e)
    }
}


export const createListerToNoteDatabase = async (userId: string, callback: (notes: NoteType[]) => void) => {
    const unsub = onSnapshot(doc(db, "notes", userId), (doc) => {
        const {notes} = doc.data() as NoteDocumentType

        callback(notes)
    });
    return unsub;
}