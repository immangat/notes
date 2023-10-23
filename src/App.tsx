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
import LoadingSpinner from "./components/loading-spinner/loading-spinnner.component";


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
                loading && <LoadingSpinner/>
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
