import styled from "styled-components";


export const DirectoryContainer = styled.div`
    display: grid;
    grid-template: 1fr 9fr / 1fr;
    background-color: white;
    overflow: auto;
    height: 100%;

`

export const CreateNoteGridItem = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    align-self: center;
`


export const NotesGridItem = styled.div`
    grid-area: 2 / 1 / 3 /2;
    gap: 2px;
    height: 90%;
`

export const NotesContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: start;
    height: 100%;
`

export const NotesItem = styled.div`
    display: flex;
    flex-direction: column;
`
