import styled from "styled-components";
import {Link} from "react-router-dom";

export const Header = styled.header`
    //background-color: yellow;
    position: fixed;
    top: 0;
    width: 100%;
    height: 7%;
    padding: 0.5rem;
    border-bottom: 1px solid black;
`

export const HeaderContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`


export const HeaderContentItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`


export const MenuIconContainer = styled.div`
    padding: 0 0.8rem;
    cursor: pointer;

`
export const LogoItemsContainer = styled.div`
    display: none;
    @media screen and (min-width: 600px) {
        display: block;
    }
`
export const LogoImage = styled.img`
    width: 35px;
    height: 50px;
    vertical-align: middle;

`
export const LogoLink = styled(Link)`
    color: inherit;
    outline: none;
    display: flex;
    text-decoration: inherit;
    align-items: center;
`
export const LogoText = styled.span`
    display: inline-block;
    vertical-align: center;
    font-size: 1.2rem;
    font-weight: bolder;
    margin-left: 0.4rem;
`


