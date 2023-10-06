import styled from "styled-components";
import TextBox from "../text-box/text-box.component";
import {TextArea, TextAreaType} from "../text-box/text-box.styles";
import {BsXSquareFill, BsXSquare} from 'react-icons/bs'
import {getSuggestedQuery} from "@testing-library/react";

export const PreviewNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  max-width: 259px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0.1rem;
  margin-bottom: 1rem;
  


`

export const PreviewTitleTextBox = styled(TextArea)`
  overflow: hidden;
`

export const PreviewBodyTextBox = styled(TextArea)`
  overflow: hidden;
`

export const CrossIcon = styled.span`

  &:hover {
    cursor: pointer;
  }

`

export const TextAreasContainer = styled.div`
  &:hover *{
    cursor: pointer;
  }
`