import styled from "styled-components";

type SideBarListProps = {
    selectList: boolean
}

type sideBarOpen = {
    issidebaropen: boolean
}

// export const SideBarContainer = styled.div`
//     display: flex;
//     height: 100%;
//     overflow: hidden;
//     justify-content: center;
//     position: absolute;
//     transition: width 0.3s;
//     background-color: white;
//     width: 50px;
//     border-right: 2px solid white;
//     z-index: 2;
// `
//
// export const SideBarListElement = styled.li<SideBarListProps>`
//     margin-left: 0;
//     margin-bottom: 4%;
//     background-color: ${(props) => (props.selectList ? "yellow" : "white")};
//
//     &:hover {
//         background-color: lightyellow;
//
//     }
//
//     &:active {
//         background-color: yellow;
//     }
// `
//
// export const SideBarList = styled.ul`
//     margin: 0;
//     padding-left: 20%;
//     padding-top: 5%;
//     list-style: none;
//     cursor: pointer;
// `
//
// export const ListItemsContainer = styled.div`
//     display: flex;
//
//     span {
//         width: 20%;
//     }
//
// `
export const SideBarContainer = styled.div<sideBarOpen>`
    position: fixed;
    left: 0;
    padding: 0 0 0 1rem;
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 200;
    width: ${(props) => props.issidebaropen ? "10rem" : "3.4rem"};
    white-space: nowrap;
    overflow-x: hidden;
    transition: width 0.1s ease-in-out;
    box-shadow: ${(props) => props.issidebaropen ? "5px 0 10px rgba(0, 0, 0, 0.1)" : "none"};

    &:hover {
        transition-delay: 70ms;
        cursor: pointer;
    }
`
export const SideBarItemContainer = styled.div<SideBarListProps>`
    display: flex;
    padding: 0.2rem 0;
    background-color: ${(props) => props.selectList ? "yellow" : "inherit"};

    &:hover {
        background-color: yellow;
        cursor: pointer;
    }

    & span {
        vertical-align: middle;
        margin-left: 1rem;
    }
`

export const SideBarItemLogoContainer = styled.div`
    width: 24px;
    height: 24px;

`