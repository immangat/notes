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


const NavBar = () => {
    const {resetURL} = useContext(NavBarContext)

    return (
        <>
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
                    <GrUserSettings
                    />
                </ProfileContainer>
            </NavBarContainer>
            <Outlet/>
        </>

    )
}

export default NavBar