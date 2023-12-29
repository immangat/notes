import styled from "styled-components";

type SideBarListProps = {
    selectList: boolean
}

export const SideBarContainer = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    transition: width 0.3s;
    background-color: white;
    width: 50px;
    border-right: 2px solid white;
    z-index: 2;
`

export const SideBarListElement = styled.li<SideBarListProps>`
    margin-left: 0;
    margin-bottom: 4%;
    background-color: ${(props) => (props.selectList ? "yellow" : "white")};

    &:hover {
        background-color: lightyellow;

    }

    &:active {
        background-color: yellow;
    }
`

export const SideBarList = styled.ul`
    margin: 0;
    padding-left: 20%;
    padding-top: 5%;
    list-style: none;
    cursor: pointer;
`

export const ListItemsContainer = styled.div`
    display: flex;

    span {
        width: 20%;
    }

`