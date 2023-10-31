import {CrossIcon, NoteItemContainer, NotesItemsContainer,NotesLabelsContainer} from "./notes-footer.styles";
import {BiDotsVerticalRounded, BiLabel} from "react-icons/bi";
import ChangeLabel from "../change-label-pop-up/change-label.component";
import {BsXSquare, BsXSquareFill} from "react-icons/bs";
import React, {ChangeEvent, MouseEvent, useContext, useState} from "react";
import {NotesContext} from "../../contexts/notes.context";
import Label from "../label/label.component";


type NotesFooterPropsType = {
    noteID: string
    checkedData: { [p: string]: boolean }
    manageCheckedData: (e: ChangeEvent<HTMLInputElement>) => void
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

const NotesFooter = ({noteID, checkedData, manageCheckedData}: NotesFooterPropsType) => {

    const {deleteNote, labels, getLabelsOfANote} = useContext(NotesContext)
    const [isCrossFilled, setIsCrossFilled] = useState(true);
    const [showLabel, setShowLabel] = useState(false)
    const [checkedData2, setCheckedData2] = useState(makeIntitialCheckedData(labels, getLabelsOfANote(noteID)))
    console.log(noteID, checkedData2)


    const deleteNoteFromModal = () => {
        deleteNote(noteID)
    }

    const onClickChangeLabel = (e: MouseEvent<SVGElement>) => {
        e.stopPropagation()
        setShowLabel(prev => !prev)
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

                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%"
                    }}
                >
                    <CrossIcon
                        title = {'delete note'}
                        onClick={deleteNoteFromModal}
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