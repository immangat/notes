import styled from "styled-components";


type ColorPickerCircleType = {
    color: string
}
export const ColorPickerCircle = styled.div<ColorPickerCircleType>`
    border: 1px dashed black;
    height: 25px;
    width: 25px;
    margin-left: 0.2rem;
    background-color: ${props => props.color};
    border-radius: 50%;
    display: inline-block;

    &:hover {
        cursor: pointer;
    }

`