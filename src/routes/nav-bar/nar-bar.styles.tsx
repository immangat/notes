import styled from "styled-components";
import {Link} from "react-router-dom";



export const NavBarContainer  = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1% 2%;
    justify-content: flex-start;
    width: 100%;
    border-bottom: 1px solid black;
`

export const LogoContainer = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-basis: 15%;
`

export const NavTitle = styled.h1`
  align-self: center;
  margin: 0 0 0 10%;
  
`

export const SearchContainer = styled.div`
    flex-basis: 40%;

`

export const ProfileContainer = styled.div`

`

export const MenuContainer = styled.div`
  margin: 0 8% 0 0 ;
`

export const NotesLogoContainer =styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const LinkForHome = styled(Link)`
  color: inherit; /* blue colors for links too */
  text-decoration: inherit;
`