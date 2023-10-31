import React, {ChangeEvent, RefObject, TextareaHTMLAttributes, useEffect, useRef, useState} from "react";
import {TextArea, TextAreaContainer} from "./text-box.styles";
import useAutosizeTextArea from "./text-box.utils";


export type TextBoxPropType = {
    textValue: string
    fontsize?: string
    refObject: RefObject<HTMLTextAreaElement>
    preventEnter: boolean
    onClickHandle?: () => void
    setText: (text: string) => void
    containerSize?: number
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextBox = ({
                     textValue,
                     setText,
                     preventEnter,
                     fontsize,
                     refObject,
                     onClickHandle,
                     containerSize,
                     ...otherProps
                 }: TextBoxPropType) => {


    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const {target: {value}} = event;
        if (preventEnter && value.substring(value.length - 1, value.length) === '\n') {
            return
        }
        setText(value)
    }

    useAutosizeTextArea(refObject.current, textValue, 400);
    useEffect(() => {
        setText(textValue + '')
    }, [])

    return (

        <TextAreaContainer
            onClick={() => {
                if (onClickHandle) {
                    onClickHandle()
                }
            }}
            containerSize={containerSize}
        >
            <TextArea
                onChange={handleInputChange}
                ref={refObject}
                rows={1}
                value={textValue}
                fontsize={fontsize}
                containerSize={containerSize}
                {...otherProps}
            >
            </TextArea>
        </TextAreaContainer>
    )


}

export default TextBox