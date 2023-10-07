import styled from "styled-components";
import {Link} from "react-router-dom";
import {GrNote, GrUserSettings} from 'react-icons/gr'



export const NavBarContainer  = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1% 2%;
    justify-content: space-between;
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
  display: none;

  @media screen and (min-width: 600px) {
   display: block; 
  }
  
`

export const SearchContainer = styled.div`
    flex-basis: 40%;
    flex-shrink: 0;
    flex-grow: 0;

`

export const ProfileContainer = styled.div`
  //margin-left: auto;
  //flex-grow: 1;
  //align-self: flex-end;
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

export const NoteIcon = styled(GrNote)`
    fill: yellow;
    display: none;
  @media screen and (min-width: 450px) {
    display: block;
  }
`