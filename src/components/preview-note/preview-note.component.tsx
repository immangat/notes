import {BodyTextBox, NoteContainer, TitleTextBox} from "../Note/note.styles";
import React, {createRef, useCallback, useContext, useEffect, useRef, useState} from "react";
import {
    CrossIcon,
    PreviewBodyTextBox,
    PreviewNoteContainer,
    PreviewTitleTextBox,
    TextAreasContainer
} from "./preview-note.styles";
import {TextArea, TextAreaContainer} from "../text-box/text-box.styles";
import useAutosizeTextArea from "../text-box/text-box.utils";
import {NoteType} from "../directory/directory.component";
import {BsXSquareFill, BsXSquare} from 'react-icons/bs'
import {NotesContext} from "../../contexts/notes.context";

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
        </PreviewNoteContainer>
    )
}

export default PreviewNote