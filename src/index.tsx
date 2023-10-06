import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NotesProvider} from "./contexts/notes.context";
import {BrowserRouter} from "react-router-dom";
import {IconContext} from "react-icons";
import {NavBarProvider} from "./contexts/nav-bar.context";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <NotesProvider>
                <NavBarProvider>
                    <IconContext.Provider value={{size: "24"}}>
                        <App/>
                    </IconContext.Provider>
                </NavBarProvider>
            </NotesProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
