import styled from "styled-components";

type SearchBoxContainerType = {
    backgroundColor: boolean
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

