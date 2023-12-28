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
import {NotesFooterArchiveNote, NotesFooterTrashPermanently} from "../notes-footer/notes-footer.styles";
import {AiFillPushpin} from "react-icons/ai";


type SelectNavbarPropsType = {
    showSelectNavBar: boolean
}
const SelectNavbar = ({showSelectNavBar}: SelectNavbarPropsType) => {
    const {selectedNotes, removeAllNotesFromSelectedNotes} = useContext(SelectNotesContext)

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
                                size={25}
                            />
                        </NavBarSearchButton>
                    </MenuIconContainer>
                    <SelectItemsContainer>
                        <span>{`${selectedNotes.length} Selected`}</span>
                    </SelectItemsContainer>

                </HeaderContentItem>
                <HeaderContentItem>
                    <NavBarSearchButton>
                        <AiFillPushpin/>
                    </NavBarSearchButton>
                    <NavBarSearchButton>
                        <IoIosColorPalette/>
                    </NavBarSearchButton>
                    <NavBarSearchButton>
                        <NotesFooterArchiveNote/>
                    </NavBarSearchButton>
                    <NavBarSearchButton>
                        <NotesFooterTrashPermanently/>
                    </NavBarSearchButton>
                    <NavBarSearchButton>
                        <BiDotsVerticalRounded/>
                    </NavBarSearchButton>
                </HeaderContentItem>
            </HeaderContentContainer>
        </Header>
    );
};

export default SelectNavbar;