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
`