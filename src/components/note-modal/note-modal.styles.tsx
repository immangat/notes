import styled from "styled-components";




export const ModalContainer = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(255, 255, 255, 0.4); /* Black w/ opacity */
  display: flex;
  justify-content: center;
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease-in-out;
  //transform: translateY(+50);
`

export const ModalBody = styled.div`
  //height: 300px;
  padding: 10px;
`