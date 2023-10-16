import styled from "styled-components";
import TextBox from "../text-box/text-box.component";
import {TextArea, TextAreaType} from "../text-box/text-box.styles";
import {BsXSquareFill, BsXSquare} from 'react-icons/bs'
import {getSuggestedQuery} from "@testing-library/react";

export const PreviewNoteContainer = styled.div`
  display: flex;
  height: max-content;
  flex-direction: column;
  border: 1px solid black;
  max-width: 259px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0.1rem;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  }
`

export const PreviewTitleTextBox = styled(TextArea)`
  overflow: clip;
`

export const PreviewBodyTextBox = styled(TextArea)`
  overflow: clip;
`

export const CrossIcon = styled.span`

  &:hover {
    cursor: pointer;
  }

`

export const TextAreasContainer = styled.div`
  overflow: hidden;
  &:hover *{
    cursor: pointer;
  }
`