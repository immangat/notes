import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NotesProvider} from "./contexts/notes.context";
import {BrowserRouter} from "react-router-dom";
import {IconContext} from "react-icons";
import {NavBarProvider} from "./contexts/nav-bar.context";
import {UserProvider} from "./contexts/user.context";
import {SideBarProvider} from "./contexts/side-bar.context";
import {SelectNotesProvider} from "./contexts/select.context";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <SelectNotesProvider>
                    <NotesProvider>
                        <NavBarProvider>
                            <SideBarProvider>
                                <IconContext.Provider value={{size: "24"}}>
                                    <App/>
                                </IconContext.Provider>
                            </SideBarProvider>
                        </NavBarProvider>
                    </NotesProvider>
                </SelectNotesProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
