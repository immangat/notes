import React, {ChangeEvent, KeyboardEvent, useContext, useEffect, useRef, useState} from "react";
import {NotesContext} from "../../contexts/notes.context";
import {NoteType} from "../basic-directory/basic-directory.component";
import {BodyTextBox, TitleTextBox} from "../note/note.styles";
import {
    CloseButton,
    ModalBody,
    ModalContainer,
    ModalContent,
    ModalNoteContainer,
    NoteModalFooterContainer
} from "./note-modal.styles";
import NotesFooter from "../notes-footer/notes-footer.component";
import Label from "../label/label.component";
import {NotesLabelsContainer} from "../preview-note/preview-note.styles";
import useMouseHover from "../../hooks/useMouseHover";
import Time from "../time/time.component";

export type NoteModalTypes = {
    noteId: string
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
const NoteModal = ({noteId}: NoteModalTypes) => {

    const {getNote, updateNote, clearModalProps, labels} = useContext(NotesContext)
    const initialNoteContent: NoteType = getNote(noteId)

    const [noteContent, setNoteContent] = useState(initialNoteContent)
    const [checkedData, setCheckedData] = useState(makeIntitialCheckedData(labels, noteContent.labels))
    const [containerSize, setContainerSize] = useState(500); // Default container size

    const bodyTextAreaRef = useRef<HTMLTextAreaElement>(null)
    const titleTextAreaRef = useRef<HTMLTextAreaElement>(null)
    const color = useRef<string | undefined>(noteContent.noteColor)
    const onEnterPressedOnTitle = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        const {key} = event
        if (key === 'Enter') {
            if (bodyTextAreaRef.current) {
                bodyTextAreaRef.current.focus()
            }
        }
    }

    const setContainerWidth = () => {
        const width = window.innerWidth;
        if (width <= 768) {
            setContainerSize(350); // Set container size for smaller screens
        } else {
            setContainerSize(500); // Set container size for larger screens
        }
    };

    const setBody = (body: string) => {
        setNoteContent(prevNote => ({
            ...prevNote,
            body: body,
            updatedAt: new Date().toString()
        }))
    }
    const setTitle = (title: string) => {
        setNoteContent(prevNote => ({
            ...prevNote,
            title: title,
            updatedAt: new Date().toString()
        }))
    }

    const onClose = () => {
        const labels = Object.keys(checkedData).filter(label => checkedData[label])
        updateNote(noteId, noteContent.updatedAt, labels, noteContent.title, noteContent.body)
        clearModalProps()
    }


    const manageCheckedData = (e: ChangeEvent<HTMLInputElement>) => {
        const {target: {id}} = e
        setCheckedData(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }
    const deleteLabel = (label: string) => {
        setCheckedData(prevState => ({
            ...prevState,
            [label]: false
        }))
    }

    const modalLabels = Object.keys(checkedData).filter(label => checkedData[label]).map(key => <Label labelValue={key}
                                                                                                       deleteLabel={deleteLabel}/>)
    const divRef = useRef<HTMLDivElement>(null); // Create a reference for the div element
    const isHovering = useMouseHover(divRef);
    useEffect(() => {
        setContainerWidth();
        window.addEventListener("resize", setContainerWidth);
        return () => {
            window.removeEventListener("resize", setContainerWidth);
        };
    }, [])
    useEffect(() => {
        //setNoteContent(getNote(noteId))
        color.current = getNote(noteId).noteColor
    }, [getNote, noteId]);

    return (
        <ModalContainer className="modal" onClick={onClose}>
            <ModalContent className="modal-content" onClick={onClose}>
                <ModalBody className="modal-body" onClick={onClose}>
                    <ModalNoteContainer
                        onClick={
                            (event) => {
                                event.stopPropagation()
                            }
                        }
                        className="testing3"
                        color={noteContent && color.current}
                        ref={divRef}
                    >
                        <TitleTextBox

                            placeholder={"Title"}
                            textValue={noteContent && noteContent.title}
                            fontsize={"1.5rem"}
                            onKeyUp={onEnterPressedOnTitle}
                            refObject={titleTextAreaRef}
                            preventEnter={true}
                            setText={setTitle}
                            containerSize={containerSize}
                        />
                        <BodyTextBox
                            placeholder={"Take a note..."}
                            textValue={noteContent && noteContent.body}
                            refObject={bodyTextAreaRef}
                            preventEnter={false}
                            setText={setBody}
                            containerSize={containerSize}
                        />
                        <div
                            style={{
                                display: "grid",
                                gridAutoFlow: "column",
                                width: "100%"
                            }}
                        >
                            <NotesLabelsContainer>
                                {modalLabels}
                            </NotesLabelsContainer>
                            <Time
                                time={noteContent.updatedAt}
                            />
                        </div>

                        <NoteModalFooterContainer
                            className="foort"
                        >
                            <NotesFooter
                                noteID={noteId}
                                checkedData={checkedData}
                                manageCheckedData={manageCheckedData}
                                active={isHovering}

                            />
                            <CloseButton
                                title='Close Note'
                                onClick={onClose}
                            >
                                Close
                            </CloseButton>

                        </NoteModalFooterContainer>


                    </ModalNoteContainer>
                </ModalBody>
            </ModalContent>
        </ModalContainer>


    )
}

export default NoteModal