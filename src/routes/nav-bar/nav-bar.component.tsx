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


const NavBar = () => {
    const {eventIncoming} = useContext(NotesContext)
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