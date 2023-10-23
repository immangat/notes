import React, {useContext, useState} from 'react';
import './App.css';
import NoteModal from "./components/note-modal/note-modal.component";
import {NotesContext} from "./contexts/notes.context";
import {Route, Routes} from "react-router-dom";
import NavBar from "./routes/nav-bar/nav-bar.component";
import Home from "./routes/home/home.component";
import Search from "./routes/search/search.component";
import SignIn from "./routes/sign-in/sign-in.component";
import LabelModal from "./components/label-modal/label-modal.component";
import {TailSpin, Vortex} from "react-loader-spinner";


function App() {

    const {modalProps, loading} = useContext(NotesContext)

    return (

        <>
            {
                modalProps.open && <NoteModal
                    key={modalProps.key}
                    id={modalProps.key}
                />
            }
            {
                modalProps.labelOpen && <LabelModal/>
            }
            {
                loading && <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        height: "100vh",
                        width: "100vw",
                        backgroundColor: "white",
                        alignItems: "center"
                    }}
                >
                    <TailSpin
                        height="80"
                        width="80"
                        color="black"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />

                </div>
            }
            <Routes>
                <Route path='/' element={<NavBar/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/search/:cat' element={<Search/>}/>
                    <Route path='/signin' element={<SignIn/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
