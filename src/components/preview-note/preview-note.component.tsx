import React, {useContext, useEffect, useState} from "react";
import {
    CrossIcon,
    PreviewBodyTextBox,
    PreviewNoteContainer,
    PreviewTitleTextBox,
    TextAreasContainer
} from "./preview-note.styles";
import {TextAreaContainer} from "../text-box/text-box.styles";
import useAutosizeTextArea from "../text-box/text-box.utils";
import {NoteType} from "../basic-directory/basic-directory.component";
import {BsXSquareFill, BsXSquare} from 'react-icons/bs'
import {NotesContext} from "../../contexts/notes.context";
import {NoteItemContainer, NotesItemsContainer, NotesLabelsContainer} from "../create-note/create-note.styles";
import {BiDotsVerticalRounded, BiLabel} from "react-icons/bi";
import ChangeLabel from "../change-label-pop-up/change-label.component";
import Label from "../label/label.component";

export type PreviewNotePropsType = {
    handleDelete: () => void
    noteContent: NoteType
}


const PreviewNote = (props: PreviewNotePropsType) => {
    const [content, setContent] = useState(props.noteContent)
    const [refElement, setRefElement] = useState<HTMLTextAreaElement | null>(null)
    const [refElement2, setRefElement2] = useState<HTMLTextAreaElement | null>(null)
    const {setKeyOfModalProp} = useContext(NotesContext)
    const [isShown, setIsShown] = useState(false);
    useAutosizeTextArea(refElement, props.noteContent.body, 400);
    useAutosizeTextArea(refElement2, props.noteContent.title, 72);
    const [showLabel, setShowLabel] = useState(false)
    const setLabels = (labels: string[]) => {
        console.log(labels)
        setContent(prevNote => ({
            ...prevNote,
            labels: labels
        }))
    }

    useEffect(() => {
        setContent(prevState => ({
            ...prevState,
            title: props.noteContent.title + '',
            body: props.noteContent.body + ''
        }))
        setRefElement(null);
        setRefElement2(null)
    }, [props.noteContent])


    const setKeyOfModal = () => {
        setKeyOfModalProp(props.noteContent.id)
    }

    const testLabels = content.labels.map(item => <Label
        labelValue={item}
    />)
    // useEffect(() => {
    //     let linesArray = editBodyTest(props.noteContent.body)
    //     if(linesArray.length > 15){
    //         let newBody = ''
    //         for(let i = 0; i < 15; i++){
    //             if(i !== 14){
    //             newBody += linesArray[i] + '\n'
    //             } else{
    //                 newBody += linesArray[i] + '...'
    //             }
    //
    //         }
    //         setContent(prevState => ({
    //             ...prevState,
    //             body: newBody
    //         }))
    //     }
    // }, []);


    return (
        <PreviewNoteContainer

        >
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

            <NotesItemsContainer>

                <NoteItemContainer>
                    <BiLabel
                        size={20}
                        style={{
                            cursor: "pointer"
                        }}
                        onClick={() => {
                            console.log("Clicked")
                            setShowLabel(prev => !prev)
                        }}
                    />
                    {
                        showLabel &&
                        <ChangeLabel
                            addLabels={setLabels}
                        />
                    }
                </NoteItemContainer>
                <BiDotsVerticalRounded
                    size={20}
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%"
                    }}
                >
                    <CrossIcon
                        style={{
                            display: "block"
                        }}
                        onClick={props.handleDelete}
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                    >
                        {isShown
                            ?
                            <BsXSquare/>
                            :
                            <BsXSquareFill/>}

                    </CrossIcon>
                </div>
            </NotesItemsContainer>


        </PreviewNoteContainer>
    )
}

export default PreviewNote