import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import {
    PreviewBodyTextBox,
    PreviewNoteContainer,
    PreviewTitleTextBox,
    TextAreasContainer,
    NotesLabelsContainer,
    PreviewNotesFooter,
    NotesPin
} from "./preview-note.styles";
import {TextAreaContainer} from "../text-box/text-box.styles";
import useAutosizeTextArea from "../text-box/text-box.utils";
import {NoteType} from "../basic-directory/basic-directory.component";
import {NotesContext} from "../../contexts/notes.context";
import Label from "../label/label.component";
import NotesFooter from "../notes-footer/notes-footer.component";
import {AiFillPushpin, AiOutlinePushpin} from "react-icons/ai";


export type PreviewNotePropsType = {
    handleDelete: () => void
    noteContent: NoteType
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

const PreviewNote = (props: PreviewNotePropsType) => {

    const [content, setContent] = useState(props.noteContent)
    const [refElement, setRefElement] = useState<HTMLTextAreaElement | null>(null)
    const [refElement2, setRefElement2] = useState<HTMLTextAreaElement | null>(null)
    const {setKeyOfModalProp, createNote, updateNote, labels, pinNote, unPinNote} = useContext(NotesContext)
    const [checkedData, setCheckedData] = useState(makeIntitialCheckedData(labels, content.labels))
    const [footerActive, setFooterActive] = useState(false)
    useAutosizeTextArea(refElement, props.noteContent.body, 400);
    useAutosizeTextArea(refElement2, props.noteContent.title, 72);
    const [showLabel, setShowLabel] = useState(false)
    const manageCheckedData = (e: ChangeEvent<HTMLInputElement>) => {
        const {target: {id}} = e
        setCheckedData(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }
    useEffect(() => {
        setContent(prevState => ({
            ...prevState,
            title: props.noteContent.title + '',
            body: props.noteContent.body + '',
            labels: props.noteContent.labels
        }))
        setRefElement(null);
        setRefElement2(null)
    }, [props.noteContent])

    useEffect(() => {
        if (showLabel) {
            setShowLabel(false)
        }
    }, [createNote])

    useEffect(() => {
        updateNote(content.id, new Date().toString(), Object.keys(checkedData).filter(key => checkedData[key]), undefined, undefined)
    }, [checkedData])

    const setKeyOfModal = () => {
        !props.noteContent.markedForTrash && setKeyOfModalProp(props.noteContent.id)
    }

    const deleteLabel = (label: string) => {
        setCheckedData(prevState => ({
            ...prevState,
            [label]: false
        }))
    }

    const testLabels = props.noteContent.labels.map(key => <Label labelValue={key}
                                                                  deleteLabel={deleteLabel}/>)

    const togglePinnedStatus = () => {
        content.notePinned ? unPinNote(content.id) : pinNote(content.id)
    }

    return (
        <PreviewNoteContainer
            onMouseEnter={() => setFooterActive(true)}
            onMouseLeave={() => setFooterActive(false)}
            color={props.noteContent.noteColor && props.noteContent.noteColor}


        >
            <NotesPin
                onClick={togglePinnedStatus}
                Icon={content.notePinned ? AiFillPushpin : AiOutlinePushpin}
            />
            <TextAreasContainer
                onClick={setKeyOfModal}
            >
                {
                    content.title
                    &&
                    <TextAreaContainer

                    >
                        <PreviewTitleTextBox
                            ref={(el) => setRefElement2(el)}
                            rows={1}
                            value={content.title}
                            fontsize={"1.5rem"}
                            readOnly={true}
                        >
                        </PreviewTitleTextBox>
                    </TextAreaContainer>
                }
                {
                    content.body
                    &&
                    <TextAreaContainer
                    >
                        <PreviewBodyTextBox
                            ref={(el) => setRefElement(el)}
                            rows={1}
                            value={content.body}
                            fontsize={undefined}
                            readOnly={true}
                        >
                        </PreviewBodyTextBox>
                    </TextAreaContainer>
                }
            </TextAreasContainer>

            <NotesLabelsContainer>
                {testLabels}
            </NotesLabelsContainer>

            <PreviewNotesFooter>
                <NotesFooter
                    active={footerActive}
                    noteID={props.noteContent.id}
                    checkedData={checkedData}
                    manageCheckedData={manageCheckedData}
                    inTrash={props.noteContent.markedForTrash}
                    inArchive={props.noteContent.markedForArchive}
                />
            </PreviewNotesFooter>
        </PreviewNoteContainer>
    )
}

export default PreviewNote