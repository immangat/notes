import React, {useContext} from 'react';
import {
    Header,
    HeaderContentContainer,
    HeaderContentItem,
    LogoImage,
    LogoItemsContainer,
    LogoLink,
    LogoText,
    MenuIconContainer,
} from "./navbar.styles";
import {AiOutlineMenu,} from 'react-icons/ai'
import noteImage from '../../assets/images/notes.png'
import NavbarProfile from "../navbar-profile/navbar-profile.component";
import SearchBox from "../search-box/search-box.component";
import {SideBarContext} from "../../contexts/side-bar.context";
import {NavBarContext} from "../../contexts/nav-bar.context";


const Navbar = () => {
    const {setState} = useContext(SideBarContext)
    const {resetURL} = useContext(NavBarContext)

    return (
        <Header
        >
            <HeaderContentContainer>
                <HeaderContentItem>
                    <MenuIconContainer
                        onClick={() => {
                            setState()
                        }}
                    >
                        < AiOutlineMenu
                            size={20}
                        />
                    </MenuIconContainer>
                    <LogoItemsContainer>
                        <LogoLink to={'/'}
                                  onClick={() => {
                                      resetURL()
                                  }}
                        >
                            <LogoImage src={noteImage}/>
                            <LogoText>Notes</LogoText>
                        </LogoLink>
                    </LogoItemsContainer>
                </HeaderContentItem>
                <SearchBox/>
                <HeaderContentItem>
                    <LogoLink to='/signin'>
                        <NavbarProfile/>
                    </LogoLink>
                </HeaderContentItem>
            </HeaderContentContainer>
        </Header>
    );
};

export default Navbar;