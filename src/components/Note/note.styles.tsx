import styled from "styled-components";
import TextBox from "../text-box/text-box.component";


export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  max-width: 350px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0.1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  

`

export const TitleTextBox = styled(TextBox)`
    
`

export const BodyTextBox = styled(TextBox)`

`
