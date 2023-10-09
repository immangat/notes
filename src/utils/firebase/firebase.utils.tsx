import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
import {UserCredential} from "firebase/auth/dist/auth"
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


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

export const signInWithgooglePopUp = () => signInWithPopup(auth, googleProvider)

export const signInWithGithubPopUp = () => signInWithPopup(auth, githubProvider)

export const db = getFirestore();

export const createUserDocument = async (userAuth: UserCredential) => {
    if (userAuth.user?.uid) {
        const userDocRef = doc(db, 'users', userAuth.user?.uid);
        const userSnapshot = await getDoc(userDocRef)
        console.log(userSnapshot.exists())
        if (!userSnapshot.exists()) {
            const {displayName, email, photoURL} = userAuth.user
            const createdAt = new Date()
            try{
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

        return userDocRef
    }
}

