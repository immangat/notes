import React, {useContext} from 'react';
import {SelectNotesContext} from "../../contexts/select.context";
import {
    Header,
    HeaderContentContainer,
    HeaderContentItem,
    MenuIconContainer, NavBarSearchButton,
    SelectItemsContainer
} from "./select-navbar.styles";
import {RxCross1} from "react-icons/rx";
import {IoIosColorPalette} from "react-icons/io";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {
    NotesFooterArchiveNote,
    NotesFooterTrashPermanently, NotesFooterTrashRestore,
    NotesFooterUnArchiveNote
} from "../notes-footer/notes-footer.styles";
import {AiFillPushpin} from "react-icons/ai";
import {NotesContext} from "../../contexts/notes.context";
import {useLocation} from "react-router-dom";


type SelectNavbarPropsType = {
    showSelectNavBar: boolean
}
const SelectNavbar = ({showSelectNavBar}: SelectNavbarPropsType) => {
    const {selectedNotes, removeAllNotesFromSelectedNotes} = useContext(SelectNotesContext)
    const {trashNote, archiveNote, undoTrash, deleteNotesPermanently, undoNoteArchival} = useContext(NotesContext)
    const location = useLocation()
    const isInTrash = location.pathname.split('/')[1] === 'trash'
    const inArchive = location.pathname.split('/')[1] === 'archive'

    return (
        <Header
            showSelectNavBar={showSelectNavBar}
        >
            <HeaderContentContainer>
                <HeaderContentItem>
                    <MenuIconContainer>
                        <NavBarSearchButton
                            onClick={removeAllNotesFromSelectedNotes}
                        >
                            <RxCross1
                                size={20}
                            />
                        </NavBarSearchButton>
                    </MenuIconContainer>
                    <SelectItemsContainer>
                        <span>{`${selectedNotes.length} Selected`}</span>
                    </SelectItemsContainer>

                </HeaderContentItem>
                <HeaderContentItem>
                    {
                        !isInTrash
                        &&
                        <>
                            <NavBarSearchButton>
                                <AiFillPushpin/>
                            </NavBarSearchButton>
                            <NavBarSearchButton>
                                <IoIosColorPalette/>
                            </NavBarSearchButton>
                            <NavBarSearchButton
                                onClick={() => {
                                    if (inArchive) {
                                        undoNoteArchival(...selectedNotes)
                                    } else {
                                        archiveNote(...selectedNotes)
                                    }
                                    removeAllNotesFromSelectedNotes()
                                }}
                            >
                                {
                                    inArchive ? <NotesFooterUnArchiveNote/> : <NotesFooterArchiveNote/>
                                }

                            </NavBarSearchButton>
                        </>
                    }
                    <NavBarSearchButton
                        title={isInTrash ? "Delete Permanently" : "Trash Notes"}
                        onClick={() => {
                            if (isInTrash) {
                                deleteNotesPermanently(selectedNotes)
                            } else {
                                trashNote(...selectedNotes)
                            }
                            removeAllNotesFromSelectedNotes()
                        }}
                    >
                        <NotesFooterTrashPermanently/>

                    </NavBarSearchButton>
                    {
                        isInTrash &&
                        <NavBarSearchButton
                            title="Restore Selected"
                            onClick={() => {
                                undoTrash(...selectedNotes)
                                removeAllNotesFromSelectedNotes()
                            }}
                        >
                            <NotesFooterTrashRestore
                                size={20}
                            />
                        </NavBarSearchButton>
                    }
                    {
                        !isInTrash
                        &&
                        <NavBarSearchButton
                        >
                            <BiDotsVerticalRounded/>
                        </NavBarSearchButton>

                    }
                </HeaderContentItem>
            </HeaderContentContainer>
        </Header>
    );
};

export default SelectNavbar;