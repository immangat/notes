import {Outlet} from "react-router-dom";
import {
    DirectoryContainer,
    MainContainer,
    SideBarComponentContainer
} from "./nar-bar.styles";
import {useContext} from "react";
import {NotesContext} from "../../contexts/notes.context";
import SideBar from "../../components/side-bar/side-bar.component";
import Navbar from "../../components/navbar/navbar.component";
import {SelectNotesContext} from "../../contexts/select.context";
import SelectNavbar from "../../components/select-narbar/select-navbar.component";


const NavBar = () => {
    const {eventIncoming} = useContext(NotesContext)
    const {selectedNotes} = useContext(SelectNotesContext)

    return (
        <MainContainer
            onClick={() => {
                eventIncoming()
            }}
            style={{
                height: "100%"
            }}
        >

            <Navbar/>
            <SelectNavbar
                showSelectNavBar={selectedNotes.length === 0}
            />

            <SideBarComponentContainer>
                <SideBar/>
            </SideBarComponentContainer>
            <DirectoryContainer>
                <Outlet/>
            </DirectoryContainer>
        </MainContainer>
    )
}

export default NavBar