import TextBox from "../text-box/text-box.component";
import React, {ChangeEvent, KeyboardEvent, useContext, useEffect, useRef, useState} from "react";
import {BodyTextBox, NoteContainer, TitleTextBox} from "../note/note.styles";
import {NoteType} from "../basic-directory/basic-directory.component";
import {nanoid} from "nanoid";
import {NotesContext} from "../../contexts/notes.context";
import {BiLabel, BiDotsVerticalRounded} from 'react-icons/bi'
import {NoteItemContainer, NotesItemsContainer, NotesLabelsContainer} from "./create-note.styles";

import ChangeLabel from "../change-label-pop-up/change-label.component";
import Label from "../label/label.component";


const makeIntitialCheckedDataPreviewNote = (labels: string[]) => {
    var temp: { [key: string]: boolean } = {}
    labels.forEach(item => {
        temp[item] = false;
    })
    return temp;
}
const CreateNote = () => {

    const {addNote, createNote, labels} = useContext(NotesContext)
    const initialNoteContent: NoteType = {
        body: '',
        id: nanoid(),
        title: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        labels: []

    }
    const bodyTextAreaRef = useRef<HTMLTextAreaElement>(null)
    const titleTextAreaRef = useRef<HTMLTextAreaElement>(null)
    const [noteContent, setNoteContent] = useState(initialNoteContent)
    const [checkedData, setCheckedData] = useState(makeIntitialCheckedDataPreviewNote(labels))
    const [showLabel, setShowLabel] = useState(false)
    const onEnterPressedOnTitle = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        const {key} = event
        if (key === 'Enter') {
            if (bodyTextAreaRef.current) {
                bodyTextAreaRef.current.focus()
            }
        }
    }
    const manageCheckedData = (e: ChangeEvent<HTMLInputElement>) => {
        const {target: {id}} = e
        setCheckedData(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
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
    const deleteLabel = (label: string) => {
        setCheckedData(prevState => ({
            ...prevState,
            [label]: false
        }))
    }

    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const checkToSeeIfAddNote = () => {
        if (!clicked) {
            setClicked(true)
            setShowLabel(false)
        }
        if (noteContent.body || noteContent.title) {
            addNote(noteContent)
            setNoteContent(
                {
                    body: '',
                    id: nanoid(),
                    title: '',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    labels: []
                }
            )
            setCheckedData(makeIntitialCheckedDataPreviewNote(labels))

        }
    }
    const testLabels = Object.keys(checkedData).filter(key => checkedData[key]).map(key => <Label labelValue={key}
                                                                                                  deleteLabel={deleteLabel}/>)
    useEffect(() => {
        setNoteContent(note => ({
            ...note,
            labels : Object.keys(checkedData).filter(key => checkedData[key])
        }))
    }, [checkedData])

    useEffect(() => {
        checkToSeeIfAddNote()
    }, [createNote])

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}

        >
            {
                clicked ?
                    <div onClick={(e) => {
                        e.stopPropagation()
                    }}
                         style={{
                             border: "1px solid black",
                             borderRadius: "5px",
                             overflow: "hidden"
                         }}
                    >

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

                            <NotesLabelsContainer>
                                {testLabels}
                            </NotesLabelsContainer>

                            <NotesItemsContainer>

                                <NoteItemContainer>
                                    <BiLabel
                                        size={20}
                                        style={{
                                            cursor: "pointer"
                                        }}
                                        onClick={() => {
                                            setShowLabel(prev => !prev)
                                        }}
                                    />
                                    {
                                        showLabel &&
                                        <ChangeLabel
                                            addLabels={manageCheckedData}
                                            checkedData={checkedData}
                                        />
                                    }
                                </NoteItemContainer>
                                <BiDotsVerticalRounded
                                    size={20}
                                />
                            </NotesItemsContainer>

                        </NoteContainer>
                    </>

            }

        </div>

    )
}

export default CreateNote