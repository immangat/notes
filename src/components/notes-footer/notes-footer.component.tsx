import {
    CrossIcon,
    NoteItemContainer,
    NotesItemsContainer,
    NotesFooterTrashRestore,
    NotesFooterTrashPermanently,
    NotesFooterArchiveNote, NotesFooterUnArchiveNote
} from "./notes-footer.styles";
import {BiDotsVerticalRounded, BiLabel} from "react-icons/bi";

import ChangeLabel from "../change-label-pop-up/change-label.component";

import React, {ChangeEvent, MouseEvent, useContext, useState} from "react";
import {NotesContext} from "../../contexts/notes.context";
import IconContainer from "../icon-container/icon-container.component";


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
    const [showLabel, setShowLabel] = useState(false)
    const [checkedData2, setCheckedData2] = useState(makeIntitialCheckedData(labels, getLabelsOfANote(noteID)))


    const trashNoteInsideFooter = () => {
        trashNote(noteID)
    }

    const onClickChangeLabel = (e: MouseEvent<HTMLDivElement>) => {
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
                >
                    <IconContainer Icon={BiDotsVerticalRounded}/>
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