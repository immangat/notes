import styled from "styled-components";
import {TextArea} from "../text-box/text-box.styles";

export const NotesItemsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  opacity: 0;
`
export const PreviewNoteContainer = styled.div`
  display: flex;
  height: max-content;
  flex-direction: column;
  border: 1px solid black;
  max-width: 259px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0.1rem;
  margin-bottom: 1rem;
  

  &:hover {
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    & ${NotesItemsContainer} {
      opacity: 1;
      transition: all 0.7s;
    }
  }

`

export const PreviewTitleTextBox = styled(TextArea)`
  overflow: clip;
`

export const PreviewBodyTextBox = styled(TextArea)`
  overflow: clip;
`

export const CrossIcon = styled.span`

  &:hover {
    cursor: pointer;
  }

`

export const TextAreasContainer = styled.div`
  overflow: hidden;

  &:hover * {
    cursor: pointer;
  }
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

export const NotesLabelsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
