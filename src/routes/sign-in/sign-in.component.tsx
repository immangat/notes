import {createUserDocument, signInWithGithubPopUp, signInWithgooglePopUp} from "../../utils/firebase/firebase.utils";
import firebase from "firebase/compat";


const SignIn = () => {

    const signInWithGoogle = async () => {
        const response = await signInWithgooglePopUp();
        const userRef = await createUserDocument(response)
    }

    const signInWithGithub = async () => {
        const response = await signInWithGithubPopUp();
        console.log(response)
    }
    return (
        <div>
            <h1>Hello, This is it.</h1>
            <button
                onClick={signInWithGoogle}
                type="button"
            >
                sign in with google
            </button>
            <button
                onClick={signInWithGithub}
                type="button"
            >
                Sign in with github
            </button>
        </div>
    )
}

export default SignIn;