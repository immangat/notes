import styled from "styled-components";

type SearchBoxContainerType = {
    backgroundColor: boolean
}

type CancelButtonPropsType = {
    showX: boolean
}

type SearchFormPropsType ={
    showBorder: boolean
}

export const SearchBoxButtons = styled.button<SearchBoxContainerType>`
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: ${props => props.backgroundColor ? "lightgrey" : "white"};
    border: none;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        opacity: 0.5;
    }
`

export const SearchBoxX = styled(SearchBoxButtons)`
    margin-left: auto;
    overflow: hidden;


`
export const SearchBoxContainer = styled.div<SearchBoxContainerType>`
    display: flex;
    flex-direction: row;
    background-color: ${props => props.backgroundColor ? "lightgrey" : "white"};
    padding: 0;
    border: ${props => props.backgroundColor ? "1px white solid" : "1px black solid"};
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s;

    /* Add other styles you want when the input is focused or interacted with */
}


`
export const SearchBoxInput = styled.input`
    border: none;
    background-color: inherit;
    outline: none;
    width: 0;
    min-width: 100%;

`


export const SearchBoxInputContainer = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;

`


////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const NavBarSearchInputContainer = styled.div`
    margin: 0 40px;
`

export const NavBarSearchInput = styled.input`
    height: 46px;
    outline: none;
    border: none;
    width: 100%;
`

export const ReloadContainer = styled.div`
    display: flex;
    margin-right: 1rem;


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

export const SearchButton = styled(NavBarSearchButton)`
    position: absolute;
    top: 25%;
    float: left;
`

export const CancelButton = styled(NavBarSearchButton)<CancelButtonPropsType>`
    position: absolute;
    top: 25%;
    right: 0;
    display: ${(props) => props.showX ? "inline-block" : "none"};
`


export const NavBarSearchContainer = styled.div`
    flex: 1 1 100%;
    display: flex;
    vertical-align: center;
    margin-left: 1rem;
`

export const SearchFormContainer = styled.div`
    flex: 1 1 auto;
    width: 100%;
`

export const SearchForm = styled.form<SearchFormPropsType>`
    position: relative;
    max-width: 720px;
    border: 1px solid transparent;
    overflow: hidden;
    border-top: ${(props) => props.showBorder ? "1px solid black" : "1px solid transparent"};
    border-bottom: ${(props) => props.showBorder ? "1px solid black" : "1px solid transparent"};
`


