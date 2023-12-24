import styled from "styled-components";

export type TextAreaType = {
    fontsize?: string
    containerSize?: number
};

export const TextAreaContainer = styled.div<TextAreaType>`
    display: flex;
    justify-content: center;
    max-width: ${props => {
        if (props.containerSize) {
            return props.containerSize + 50 + 'px'
        }
        return "250px"
    }};
    min-height: 30px;
    overflow: hidden;
`;

export const TextArea = styled.textarea<TextAreaType>`
    resize: none;
    /* Identical styling required!! */
    // border: 1px solid black;
    outline: none;
    padding: 0.5rem;
    font-size: ${props => props.fontsize || 'inherit'};
    max-width: ${props => {
        if (props.containerSize) {
            return props.containerSize - 5 + 'px'
        }
        return "250px"
    }};
    min-width: ${props => {
        if (props.containerSize) {
            return props.containerSize - 5 + 'px'
        }
        return "250px"
    }};;
    min-height: 30px;
    white-space: pre-wrap;
    border: none;
    background-color: inherit;
`;