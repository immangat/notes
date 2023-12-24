import styled from "styled-components";
import {FaTrashRestore, FaTrashAlt} from "react-icons/fa";
import {RiInboxArchiveLine, RiInboxUnarchiveLine} from "react-icons/ri";


export const NotesFooterTrashRestore = styled(FaTrashRestore)`
    &:hover {
        color: green;
    }
`
export const NotesFooterArchiveNote = styled(RiInboxArchiveLine)`
 
 
`

export const NotesFooterUnArchiveNote = styled(RiInboxUnarchiveLine)`
`

export const NotesFooterTrashPermanently = styled(FaTrashAlt)`
    &:hover {
        color: Red;
    }
`
export const NotesItemsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    opacity: 1;
`

export const NoteItemContainer = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: relative;
    &:hover {
        //background: radial-gradient(ellipse at center, wheat, white);
        background: yellow;
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
