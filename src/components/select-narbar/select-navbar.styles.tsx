import styled from "styled-components";


type SelectHeaderPropsType = {
    showSelectNavBar: boolean
}
export const Header = styled.header<SelectHeaderPropsType>`
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    height: 7%;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    transform: ${(props) => props.showSelectNavBar ? "translateY(-100%)" : "translateY(0)"};
    transition-timing-function: ease-in;
    transition: 0.2s;
    //transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
`


export const HeaderContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: space-between;
`

export const HeaderContentItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`


export const MenuIconContainer = styled.div`
    padding: 0 0 0 0.5rem;

`

export const SelectItemsContainer = styled.div`


`

export const NavBarSearchButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    background-color: transparent;

    &:hover {
        transform: scale(1.1);
    }
`