import {GrNote, GrUserSettings} from 'react-icons/gr'
import {Link, Outlet, useNavigate} from "react-router-dom";
import {
    DirectoryContainer,
    LinkForHome,
    LogoContainer, MainContainer,
    MenuContainer,
    NavBarContainer, NavBarImage,
    NavTitle, NoteIcon, NotesLogoContainer,
    ProfileContainer,
    SearchContainer, SideBarComponentContainer
} from "./nar-bar.styles";
import {AiOutlineMenu} from 'react-icons/ai'
import SearchBox from "../../components/search-box/search-box.component";
import {useContext} from "react";
import {NavBarContext} from "../../contexts/nav-bar.context";
import {NotesContext} from "../../contexts/notes.context";
import {UserContext} from "../../contexts/user.context";
import SideBar from "../../components/side-bar/side-bar.component";
import {SideBarContext} from "../../contexts/side-bar.context";
import NavbarProfile from "../../components/navbar-profile/navbar-profile.component";


const NavBar = () => {
    const {resetURL} = useContext(NavBarContext)
    const {eventIncoming} = useContext(NotesContext)
    const {user} = useContext(UserContext)
    const {setState} = useContext(SideBarContext)
    const navigate = useNavigate()

    return (
        <MainContainer
            onClick={() => {
                eventIncoming()
            }}
            style={{
                height: "100%"
            }}
        >
            <NavBarContainer>
                <LogoContainer>
                    <MenuContainer
                        onClick={() => {
                            setState()
                        }}
                    >
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
                    <LinkForHome to='/signin'>
                        <NavbarProfile/>
                        {/*{*/}
                        {/*    user && user.userData ? (*/}
                        {/*        <NavBarImage alt="profile" src={user.userData.photoURL}*/}
                        {/*    />*/}
                        {/*    ) : (*/}
                        {/*    <GrUserSettings/>*/}
                        {/*    )*/}
                        {/*}*/}
                    </LinkForHome>
                </ProfileContainer>
            </NavBarContainer>
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