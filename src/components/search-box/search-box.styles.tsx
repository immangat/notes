import styled from "styled-components";

type SearchBoxContainerType = {
    backgroundColor: boolean
}

export const SearchBoxContainer = styled.div<SearchBoxContainerType>`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.backgroundColor ? "lightgrey" : "white"};
  padding: 0;
  border: ${props => props.backgroundColor ? "1px white solid" : "1px black solid"};
  border-radius: 5%;
  overflow: hidden;
`

export const SearchBoxButtons = styled.button<SearchBoxContainerType>`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: ${props => props.backgroundColor ? "lightgrey" : "white"};
  border: none;
  cursor: pointer;
`

export const SearchBoxX = styled(SearchBoxButtons)`
  margin-left: auto;
  opacity: 0;
`
export const SearchBoxInput = styled.input`
  border: none;
  background-color: inherit;
  outline: none;
  width: 0;
  min-width: 100%;

  &:active {
    &.${SearchBoxX} {
      opacity: 1;
    }
  }
`


export const SearchBoxInputContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`

