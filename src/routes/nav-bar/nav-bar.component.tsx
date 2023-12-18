import {Outlet} from "react-router-dom";
import {
    DirectoryContainer,
    LinkForHome,
    LogoContainer, MainContainer,
    MenuContainer,
    NavBarContainer, NavBarSpinnerContainer,
    NavTitle, NoteIcon, NotesLogoContainer,
    ProfileContainer,
    SearchContainer, SideBarComponentContainer
} from "./nar-bar.styles";
import {TailSpin} from "react-loader-spinner";
import {AiOutlineMenu} from 'react-icons/ai'
import SearchBox from "../../components/search-box/search-box.component";
import {useContext} from "react";
import {NavBarContext} from "../../contexts/nav-bar.context";
import {NotesContext} from "../../contexts/notes.context";
import SideBar from "../../components/side-bar/side-bar.component";
import {SideBarContext} from "../../contexts/side-bar.context";
import NavbarProfile from "../../components/navbar-profile/navbar-profile.component";


const NavBar = () => {
    const {resetURL} = useContext(NavBarContext)
    const {eventIncoming, loadingNavBar} = useContext(NotesContext)
    const {setState} = useContext(SideBarContext)

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
                <NavBarSpinnerContainer>
                    {
                        loadingNavBar
                        &&
                        <TailSpin
                            height="20"
                            width="20"
                            color="black"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />

                    }
                </NavBarSpinnerContainer>
                <ProfileContainer
                >
                    <LinkForHome to='/signin'>
                        <NavbarProfile/>
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