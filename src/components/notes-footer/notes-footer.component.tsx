import {
    NoteItemContainer,
    NotesItemsContainer,
    NotesFooterTrashRestore,
    NotesFooterTrashPermanently,
    NotesFooterArchiveNote, NotesFooterUnArchiveNote
} from "./notes-footer.styles";
import {BiDotsVerticalRounded, BiLabel} from "react-icons/bi";
import ChangeLabel from "../change-label-pop-up/change-label.component";
import React, {ChangeEvent, MouseEvent, useContext, useEffect, useState} from "react";
import {NotesContext} from "../../contexts/notes.context";
import IconContainer from "../icon-container/icon-container.component";
import MoreOptions from "../more-options/more-options.component";
import {IoIosColorPalette} from "react-icons/io";
import ColorPicker from "../color-picker/color-picker.component";


type NotesFooterPropsType = {
    noteID: string
    checkedData: { [p: string]: boolean }
    manageCheckedData: (e: ChangeEvent<HTMLInputElement>) => void,
    inTrash?: boolean
    inArchive?: boolean
    active?: boolean
}

const makeIntitialCheckedData = (labels: string[], checklabels: string[]) => {
    var temp: { [key: string]: boolean } = {}
    labels.forEach(item => {
        temp[item] = false;
    })
    checklabels.forEach((item) => {
        temp[item] = true;
    })
    return temp;
}

const NotesFooter = ({noteID, checkedData, manageCheckedData, inTrash, inArchive, active}: NotesFooterPropsType) => {

    const {
        labels,
        getLabelsOfANote,
        trashNote,
        deleteNote,
        undoTrash,
        archiveNote,
        undoNoteArchival
    } = useContext(NotesContext)
    const [showLabel, setShowLabel] = useState(false)
    const [moreOptions, setMoreOptions] = useState(false)
    const [colorPicker, setColorPicker] = useState(false)
    const [checkedData2, setCheckedData2] = useState(makeIntitialCheckedData(labels, getLabelsOfANote(noteID)))




    const trashNoteInsideFooter = () => {
        trashNote(noteID)
    }

    const onClickChangeLabel = (e?: MouseEvent<HTMLDivElement>) => {
        e && e.stopPropagation()
        setShowLabel(prev => !prev)
        setMoreOptions(false)
    }

    const deleteNoteFromModal = () => {
        deleteNote(noteID)
    }
    const deleteLabel = (label: string) => {
        setCheckedData2(prevState => ({
            ...prevState,
            [label]: false
        }))
    }

    useEffect(() => {
        window.addEventListener("click", (e) => {
            console.log(showLabel)
            setShowLabel(prev => {
                if (prev) {
                    return false
                }
                return prev
            })
            setMoreOptions(prev => {
                if (prev) {
                    return false
                }
                return prev
            })

        })
        return () => window.removeEventListener("click", () => {

        })
    }, [showLabel, moreOptions]);

    if (inTrash) {
        return (
            <NotesItemsContainer
                showFooter={active}
            >
                <NoteItemContainer
                    title='Undo Trash'
                    onClick={() => undoTrash(noteID)}
                >
                    <NotesFooterTrashRestore
                        size={20}
                    />
                </NoteItemContainer>
                <NoteItemContainer
                    title='Delete Permanant'
                    onClick={deleteNoteFromModal}
                >
                    <NotesFooterTrashPermanently
                        size={20}
                    />
                </NoteItemContainer>
            </NotesItemsContainer>
        )
    }
    return (
        <div>
            <NotesItemsContainer
                showFooter={moreOptions || showLabel || active}
            >

                <NoteItemContainer
                    title="Labels"
                    onClick={onClickChangeLabel}
                >
                    <IconContainer Icon={BiLabel}/>
                    {
                        showLabel
                        &&
                        <ChangeLabel
                            addLabels={manageCheckedData}
                            checkedData={checkedData}
                        />
                    }
                </NoteItemContainer>
                <NoteItemContainer
                    title="Archive Note"
                    onClick={inArchive ? () => undoNoteArchival(noteID) : () => archiveNote(noteID)}
                >
                    {
                        inArchive
                            ?
                            <IconContainer
                                Icon={NotesFooterUnArchiveNote}
                            />

                            :
                            <IconContainer Icon={NotesFooterArchiveNote}/>


                    }

                </NoteItemContainer>
                <NoteItemContainer
                    title="More Options"
                    onClick={(e) => setMoreOptions(prev => {
                        e.stopPropagation()
                        console.log("clicking")
                        setShowLabel(false)
                        return !prev
                    })}
                >
                    <IconContainer Icon={BiDotsVerticalRounded}/>
                    {
                        moreOptions
                        &&
                        <MoreOptions/>

                    }
                </NoteItemContainer>
                <NoteItemContainer
                    title="Change Backgroud Color"
                    onClick={() => setColorPicker(prev => !prev)}
                >
                    <IconContainer Icon={IoIosColorPalette}/>
                    {
                        colorPicker
                        &&
                        <ColorPicker
                            noteID={noteID}
                        />
                    }
                </NoteItemContainer>

                <NoteItemContainer
                    title={'delete note'}
                    onClick={trashNoteInsideFooter}
                >

                    <IconContainer Icon={NotesFooterTrashPermanently}/>

                </NoteItemContainer>


            </NotesItemsContainer>

        </div>
    )
}

export default NotesFooter