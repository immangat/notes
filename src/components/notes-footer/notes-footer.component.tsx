import {
    CrossIcon,
    NoteItemContainer,
    NotesItemsContainer,
    NotesLabelsContainer,
    NotesFooterTrashRestore,
    NotesFooterTrashPermanently,
    NotesFooterArchiveNote, NotesFooterUnArchiveNote
} from "./notes-footer.styles";
import {BiDotsVerticalRounded, BiLabel} from "react-icons/bi";
import {FaArchive} from "react-icons/fa";
import ChangeLabel from "../change-label-pop-up/change-label.component";
import {BsXSquare, BsXSquareFill} from "react-icons/bs";
import React, {ChangeEvent, MouseEvent, useContext, useState} from "react";
import {NotesContext} from "../../contexts/notes.context";
import Label from "../label/label.component";


type NotesFooterPropsType = {
    noteID: string
    checkedData: { [p: string]: boolean }
    manageCheckedData: (e: ChangeEvent<HTMLInputElement>) => void,
    inTrash?: boolean
    inArchive?: boolean
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

const NotesFooter = ({noteID, checkedData, manageCheckedData, inTrash, inArchive}: NotesFooterPropsType) => {

    const {
        labels,
        getLabelsOfANote,
        trashNote,
        deleteNote,
        undoTrash,
        archiveNote,
        undoNoteArchival
    } = useContext(NotesContext)
    const [isCrossFilled, setIsCrossFilled] = useState(true);
    const [showLabel, setShowLabel] = useState(false)
    const [checkedData2, setCheckedData2] = useState(makeIntitialCheckedData(labels, getLabelsOfANote(noteID)))


    const trashNoteInsideFooter = () => {
        trashNote(noteID)
    }

    const onClickChangeLabel = (e: MouseEvent<SVGElement>) => {
        e.stopPropagation()
        setShowLabel(prev => !prev)
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


    // const notesFooterLabels = noteLabels.map(key => <Label
    //     labelValue={key}
    //     deleteLabel={deleteLabel}/>
    // )

    // const manageCheckedData = (e: ChangeEvent<HTMLInputElement>) => {
    //     const {target: {id}} = e
    //     setCheckedData(prevState => ({
    //         ...prevState,
    //         [id]: !prevState[id]
    //     }))
    // }

    if (inTrash) {
        return (
            <NotesItemsContainer>
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
            {/*<NotesLabelsContainer>*/}
            {/*    {notesFooterLabels}*/}
            {/*</NotesLabelsContainer>*/}
            <NotesItemsContainer>

                <NoteItemContainer
                    title="Labels"

                >
                    <BiLabel
                        size={20}
                        style={{
                            cursor: "pointer"
                        }}
                        onClick={onClickChangeLabel}

                    />
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
                    title="More Options"
                >
                    <BiDotsVerticalRounded
                        size={20}
                    />
                </NoteItemContainer>
                <NoteItemContainer
                    title="Archive Note"
                    onClick={inArchive ? () => undoNoteArchival(noteID) : () => archiveNote(noteID)}
                >
                    {
                        inArchive
                            ?
                            <NotesFooterUnArchiveNote
                                size={20}

                            /> :
                            <NotesFooterArchiveNote
                                size={20}
                            />

                    }

                </NoteItemContainer>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%"
                    }}
                >
                    <CrossIcon
                        title={'delete note'}
                        onClick={trashNoteInsideFooter}
                        onMouseEnter={() => setIsCrossFilled(false)}
                        onMouseLeave={() => setIsCrossFilled(true)}
                    >
                        {isCrossFilled
                            ?
                            <BsXSquare
                                color={"red"}
                            />
                            :
                            <BsXSquareFill
                                color={"red"}
                            />}

                    </CrossIcon>
                </div>


            </NotesItemsContainer>

        </div>
    )
}

export default NotesFooter