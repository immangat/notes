import {
    NoteItemContainer,
    NotesItemsContainer,
    NotesFooterTrashRestore,
    NotesFooterTrashPermanently,
    NotesFooterArchiveNote, NotesFooterUnArchiveNote
} from "./notes-footer.styles";
import {BiDotsVerticalRounded, BiLabel} from "react-icons/bi";
import ChangeLabel from "../change-label-pop-up/change-label.component";
import React, {ChangeEvent, MouseEvent, useContext, useEffect, useRef, useState} from "react";
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
        undoNoteArchival,
        createNote
    } = useContext(NotesContext)
    const [showLabel, setShowLabel] = useState(false)
    const [moreOptions, setMoreOptions] = useState(false)
    const [colorPicker, setColorPicker] = useState(false)
    const [checkedData2, setCheckedData2] = useState(makeIntitialCheckedData(labels, getLabelsOfANote(noteID)))
    const notesContainerRef = useRef<HTMLDivElement>(null)


    const trashNoteInsideFooter = () => {
        trashNote(noteID)
    }

    const onClickChangeLabel = (e?: MouseEvent<HTMLDivElement>) => {
        //e && e.stopPropagation()
        const title = e?.currentTarget.getAttribute('title') || ""
        switch (title) {
            case "More Options":
                setShowLabel(false)
                setMoreOptions(prev => !prev)
                setColorPicker(false)
                break
            case "Labels":
                setShowLabel(prev => !prev)
                setMoreOptions(false)
                setColorPicker(false)
                break
            case "Change Backgroud Color":
                setShowLabel(false)
                setMoreOptions(false)
                setColorPicker(prev => !prev)
                break
            default:
                setShowLabel(false)
                setMoreOptions(false)
                setColorPicker(false)
        }
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

    // useEffect(() => {
    //     window.addEventListener("click", (e) => {
    //         // console.log(showLabel)
    //         // setShowLabel(prev => {
    //         //     if (prev) {
    //         //         return false
    //         //     }
    //         //     return prev
    //         // })
    //         // setMoreOptions(prev => {
    //         //     if (prev) {
    //         //         return false
    //         //     }
    //         //     return prev
    //         // })
    //         console.log("running")
    //         onClickChangeLabel()
    //
    //     })
    //     return () => window.removeEventListener("click", () => {
    //
    //     })
    // }, [showLabel, moreOptions]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
            if (notesContainerRef.current && !notesContainerRef.current.contains(event.target as Node)) {
                onClickChangeLabel();
            }
        };

        document.addEventListener('click', (e) => handleClickOutside(e as unknown as MouseEvent<HTMLDivElement>), true);
        return () => {
            document.removeEventListener('click', (e) => handleClickOutside(e as unknown as MouseEvent<HTMLDivElement>), true);
        };
    }, [onClickChangeLabel, notesContainerRef]);


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
        <div
            onClick={(e) => {
                //e.stopPropagation()

            }}
            ref={notesContainerRef}
        >
            <NotesItemsContainer
                showFooter={moreOptions || showLabel || colorPicker || active}
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
                    title
                        =
                        "Archive Note"
                    onClick
                        ={
                        inArchive ?
                            () =>
                                undoNoteArchival
                                (
                                    noteID) :
                            () =>
                                archiveNote
                                (
                                    noteID)
                    }
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
                    onClick={onClickChangeLabel}
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
                    onClick={onClickChangeLabel}
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