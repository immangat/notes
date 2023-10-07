import React, {KeyboardEvent, useRef, useState} from "react";
import {BodyTextBox, NoteContainer, TitleTextBox} from "./note.styles";
import {NoteType} from "../basic-directory/basic-directory.component";


export type NotePropsType = {
    handleDelete: () => void
    noteContent: NoteType
}
const Note = (props: NotePropsType) => {

    const initialNoteContent: NoteType = {
        body: props.noteContent.body || '', id: props.noteContent.id, title: props.noteContent.title || ''

    }
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


    return (
        <NoteContainer
            onClick={
                (event) => {
                    event.stopPropagation()
                }
            }
        >
            <TitleTextBox

                placeholder={"Title"}
                textValue={noteContent.title}
                fontsize={"1.5rem"}
                onKeyUp={onEnterPressedOnTitle}
                refObject={titleTextAreaRef}
                preventEnter={true}
                setText={setTitle}
            />
            <BodyTextBox
                placeholder={"Take a note..."}
                textValue={noteContent.body}
                refObject={bodyTextAreaRef}
                preventEnter={false}
                setText={setBody}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "100%"
                }}
            >
                <span
                    style={{
                        display: "block"
                    }}
                    onClick={props.handleDelete}
                >
                X</span>
            </div>
        </NoteContainer>
    )
}

export default Note;