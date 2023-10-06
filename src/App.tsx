import React, {useContext, useState} from 'react';
import './App.css';
import Note from "./components/Note/note.component";
import {nanoid} from "nanoid";
import Directory from "./components/directory/directory.component";
import NoteModal from "./components/note-modal/note-modal.component";
import {NotesContext} from "./contexts/notes.context";
import {Route, Routes} from "react-router-dom";
import NavBar from "./routes/nav-bar/nav-bar.component";
import Home from "./routes/home/home.component";
import Search from "./routes/search/search.component";


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
                    <Route path='/search/:cat' element={<Search />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
