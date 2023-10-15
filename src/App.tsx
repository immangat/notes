import React, {useContext, useState} from 'react';
import './App.css';
import NoteModal from "./components/note-modal/note-modal.component";
import {NotesContext} from "./contexts/notes.context";
import {Route, Routes} from "react-router-dom";
import NavBar from "./routes/nav-bar/nav-bar.component";
import Home from "./routes/home/home.component";
import Search from "./routes/search/search.component";
import SignIn from "./routes/sign-in/sign-in.component";


function App() {

    const {modalProps} = useContext(NotesContext)

    return (

        <>
            {
                modalProps.open && <NoteModal
                    key={modalProps.key}
                    id={modalProps.key}
                />
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
