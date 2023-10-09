import {GrNote, GrUserSettings} from 'react-icons/gr'
import {Link, Outlet, useNavigate} from "react-router-dom";
import {
    LinkForHome,
    LogoContainer,
    MenuContainer,
    NavBarContainer,
    NavTitle, NoteIcon, NotesLogoContainer,
    ProfileContainer,
    SearchContainer
} from "./nar-bar.styles";
import {AiOutlineMenu} from 'react-icons/ai'
import SearchBox from "../../components/search-box/search-box.component";
import {useContext} from "react";
import {NavBarContext} from "../../contexts/nav-bar.context";
import {NotesContext} from "../../contexts/notes.context";


const NavBar = () => {
    const {resetURL} = useContext(NavBarContext)
    const {eventIncoming} = useContext(NotesContext)

    return (
        <div
            onClick={() =>{
                eventIncoming()
            }}
        >
            <NavBarContainer>
                <LogoContainer>
                    <MenuContainer>
                        <AiOutlineMenu
                        />
                    </MenuContainer>
                    <LinkForHome to="/"
                                 onClick={() => {
                                     resetURL()
                                 }}
                    >
                        <NotesLogoContainer>
                            <NoteIcon
                                size={30}
                            />
                            <NavTitle>Notes</NavTitle>
                        </NotesLogoContainer>
                    </LinkForHome>

                </LogoContainer>
                <SearchContainer>
                    <SearchBox/>
                </SearchContainer>
                <ProfileContainer
                >
                    <LinkForHome to = '/signin'>
                        <GrUserSettings
                        />
                    </LinkForHome>
                </ProfileContainer>
            </NavBarContainer>
            <Outlet/>
        </div>

    )
}

export default NavBar