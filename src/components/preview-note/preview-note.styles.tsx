import styled from "styled-components";
import {TextArea} from "../text-box/text-box.styles";
import IconContainer from "../icon-container/icon-container.component";


export const NotesItemsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    opacity: 0;
`

export const PreviewNotesFooter = styled.div`
    opacity: 0;
    width: 100%;
    padding: 0.2rem 1rem;
    @media only screen and (max-width: 768px) {
        /* Apply styles for mobile or tablet devices */
        opacity: 1;
    }
`
export const PreviewNoteContainer = styled.div`
    position: relative;
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

        ${PreviewNotesFooter} {
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

export const NotesPin = styled(IconContainer)`
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;

    &:hover {
        color: yellow;
    }
`

