import styled from "styled-components";
import {FaTrashRestore, FaTrashAlt} from "react-icons/fa";





export const NotesFooterTrashRestore = styled(FaTrashRestore)`
    &:hover{
        color: green;
    }
`

export const NotesFooterTrashPermanently = styled(FaTrashAlt)`
    &:hover{
        color: Red;
    }
`
export const NotesItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  opacity: 1;
`

export const NoteItemContainer = styled.button`
  position: relative;
  padding: 0;
  outline: none;
  border: none;
  background-color: inherit;
  cursor: pointer;

  & :hover {
    background: radial-gradient(ellipse at center, wheat, white);
  }
`

export const CrossIcon = styled.button`
  margin: 0;
  padding: 0;
  align-items: center;
  border: none;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }

`

export const NotesLabelsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
