import styled from "styled-components";


export const LabelX = styled.span`
  position: absolute;
  left: 70%;
  display: none;
  padding: 5%;
  
  &:hover{
    border: 1px solid grey;
  }
  
`
export const LabelContainer = styled.div`
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    //background-color: #ddd;
    border: none;
    //color: black;
    text-align: center;
    text-decoration: none;
    margin: 4px 2px;
    border-radius: 16px;
    font-size: 10px;
    padding: 1%;
    position: relative;
    background-color: rgba(255,255,255,0.2);

    &:hover {
        //background-color: antiquewhite;

        & ${LabelX} {
            display: block;
            z-index: 1;
            opacity: 0.7;

        }
    }
`

export const LabelValue = styled.span`
  
`

