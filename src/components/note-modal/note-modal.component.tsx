import React, {KeyboardEvent, useContext, useRef, useState} from "react";
import {NotesContext} from "../../contexts/notes.context";
import {NoteType} from "../basic-directory/basic-directory.component";
import {BodyTextBox, NoteContainer, TitleTextBox} from "../Note/note.styles";
import {ModalBody, ModalContainer, ModalContent} from "./note-modal.styles";

export type NoteModalTypes = {
    id: string
}
const NoteModal = ({id}: NoteModalTypes) => {

    const {getNote, deleteNote, updateNote, clearModalProps} = useContext(NotesContext)

    const initialNoteContent: NoteType = getNote(id)
    const bodyTextAreaRef = useRef<HTMLTextAreaElement>(null)
    const titleTextAreaRef = useRef<HTMLTextAreaElement>(null)
    const [noteContent, setNoteContent] = useState(initialNoteContent)
    const onEnterPressedOnTitle = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        const {key} = event
        if (key === 'Enter') {
            if (bodyTextAreaRef.current) {
                bodyTextAreaRef.current.focus()
            }
        }
    }

    const setBody = (body: string) => {
        setNoteContent(prevNote => ({
            ...prevNote,
            body: body
        }))
    }
    const setTitle = (title: string) => {
        setNoteContent(prevNote => ({
            ...prevNote,
            title: title
        }))
    }

    const onClose = () => {
        updateNote(id, noteContent.title, noteContent.body)
        clearModalProps()
    }

    const deleteNoteFromModal = () => {
        clearModalProps()
        deleteNote(id)
    }

    return (

        <ModalContainer className="modal" onClick={onClose}>
            <ModalContent className="modal-content" onClick={onClose}>
                <ModalBody className="modal-body" onClick={e => e.stopPropagation()}>
                    <NoteContainer
                        onClick={
                            (event) => {
                                event.stopPropagation()
                            }
                        }
                    >
                        <TitleTextBox

                            placeholder={"Title"}
                            textValue={noteContent && noteContent.title}
                            fontsize={"1.5rem"}
                            onKeyUp={onEnterPressedOnTitle}
                            refObject={titleTextAreaRef}
                            preventEnter={true}
                            setText={setTitle}
                        />
                        <BodyTextBox
                            placeholder={"Take a note..."}
                            textValue={noteContent && noteContent.body}
                            refObject={bodyTextAreaRef}
                            preventEnter={false}
                            setText={setBody}
                        />
                        <span
                            style={{
                                display: "block"
                            }}
                            onClick={deleteNoteFromModal}
                        >
                X</span>
                        <span
                            style={{
                                display: "block"
                            }}
                            onClick={onClose}
                        >
                                Close
                            </span>

                    </NoteContainer>
                </ModalBody>
            </ModalContent>
        </ModalContainer>


    )
}

export default NoteModal