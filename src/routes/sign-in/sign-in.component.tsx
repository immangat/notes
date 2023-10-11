import {
    createUserDocument,
    signInWithGithubPopUp,
    signInWithgooglePopUp,
    signOutUser
} from "../../utils/firebase/firebase.utils";
import {BsGoogle, BsGithub} from 'react-icons/bs'
import {useContext} from "react";
import {UserContext} from "../../contexts/user.context";
import {NotesContext} from "../../contexts/notes.context";

const SignIn = () => {

    const {user, setCurrentUser} = useContext(UserContext)
    const {clearAllNotes} = useContext(NotesContext)
    const signInWithGoogle = async () => {
         await signInWithgooglePopUp();
    }
    console.log(user)
    const signInWithGithub = async () => {
        await signInWithGithubPopUp();
    }

    const signOut = async () => {
        await signOutUser();
        setCurrentUser(null)
        clearAllNotes()
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            height: "90%",
            alignItems: "center",
            overflow: "hidden"

        }}>
            <div
                style={{
                    display: "flex",
                    border: "1px solid grey",
                    padding: "1% 1%",
                    borderRadius: "2%",
                    maxWidth: "20%",
                    flexGrow: "1",
                    flexDirection: "column",
                    alignItems: "center"


                }}
            >
                <h1
                    style={{
                        textAlign: "center"
                    }}
                >
                    {user ? "You are Signed In" : "Log In"}
                </h1>
                {
                    !user ? <>

                        <div
                            onClick={signInWithGoogle}
                            style={{
                                display: "flex",
                                margin: "1%",
                                width: "70%",
                                border: "1px solid grey",
                                borderRadius: "2%",
                                justifyContent: "center",
                                padding: "1% 0",
                                cursor: "pointer"
                            }}
                        >
                            <span> Sign in With Google</span>
                            <BsGoogle
                                style={{
                                    marginLeft: "2px"
                                }}
                            />
                        </div>
                        <div
                            onClick={signInWithGithub}
                            style={{
                                display: "flex",
                                margin: "1%",
                                width: "70%",
                                border: "1px solid grey",
                                borderRadius: "10%",
                                justifyContent: "center",
                                padding: "1% 0",
                                cursor: "pointer"
                            }}
                        >
                            <span> Sign in With GitHub</span>
                            <BsGithub
                                style={{
                                    marginLeft: "2px"
                                }}
                            />
                        </div>
                    </>
                        :
                        <div
                            onClick={signOut}
                            style={{
                                display: "flex",
                                margin: "1%",
                                width: "70%",
                                border: "1px solid grey",
                                borderRadius: "10%",
                                justifyContent: "center",
                                padding: "1% 0",
                                cursor: "pointer"
                            }}
                        >
                            <span> Sign Out</span>
                        </div>
                }

            </div>
        </div>
    )
}


export default SignIn;