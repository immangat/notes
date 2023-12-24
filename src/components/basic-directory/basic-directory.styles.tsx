import styled from "styled-components";


export const DirectoryContainer = styled.div`
    display: grid;
    grid-template: 1fr 9fr / 1fr;
    background-color: white;
    overflow: auto;
    height: auto;
    padding-top: 1%;

`

export const CreateNoteGridItem = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    align-self: center;
`


export const NotesGridItem = styled.div`
    grid-area: 2 / 1 / 3 /2;
    gap: 2px;
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

export const NotesContainerTest = styled.div`

    @media screen and (min-width: 600px) {

    }
    columns: 245px;
    column-gap: 1em;
    //@media screen and (max-width: 599px) {
    //  display: flex;
    //  justify-content: center;
    //  flex-direction: column;
    //}

    //display: flex;
    //flex-wrap: wrap;
    //justify-content: center;
    //gap: 12px;
    //flex-grow: 0;
    //flex-shrink: 0;

    & > * {
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid; /* Firefox is dumb */
        break-inside: avoid;
    }
`

export const ContainerOfNoteContainer = styled.div`
    padding: 1%;
    @media screen and (max-width: 550px) {
        display: flex;
        justify-content: center;
    }
`
