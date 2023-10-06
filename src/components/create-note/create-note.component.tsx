import TextBox from "../text-box/text-box.component";
import React, {KeyboardEvent, useContext, useRef, useState} from "react";
import {BodyTextBox, NoteContainer, TitleTextBox} from "../Note/note.styles";
import {NoteType} from "../directory/directory.component";
import {nanoid} from "nanoid";
import {NotesContext} from "../../contexts/notes.context";


const CreateNote = () => {

    const {addNote} = useContext(NotesContext)
    const initialNoteContent: NoteType = {
        body: '',
        id: nanoid(),
        title: ''

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

    const [clicked, setClicked] = useState(true)
    const handleDelete = () => {

    }

    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const checkToSeeIfAddNote = () => {
        if (!clicked) {
            setClicked(true)
        }
        if (noteContent.body || noteContent.title) {
            addNote(noteContent)
            setNoteContent(
                {
                    body: '',
                    id: nanoid(),
                    title: ''
                }
            )

        }
    }


    return (
        <div
            onClick={checkToSeeIfAddNote}
            style={{
                display: "flex",
                justifyContent: "center"
            }}

        >
            {
                clicked ?
                    <div onClick={() => {

                    }}>

                        <TextBox
                            onClickHandle={() => {
                                setClicked(false)
                            }}
                            textValue={''}
                            preventEnter={true}
                            placeholder={"Take a note... "}
                            readOnly={true}
                            refObject={textAreaRef}
                            setText={(key) => null}>
                        </TextBox>
                    </div>
                    :
                    <>
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

                        </NoteContainer>
                    </>

            }

        </div>

    )
}

export default CreateNote