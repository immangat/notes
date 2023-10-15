import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  position: absolute;
  transition: width 0.3s;
  background-color: white;
  width: 50px;
  border-right: 2px solid white;
`

export const SideBarList = styled.ul`
  margin: 0;
  padding-left: 20%;
  padding-top: 5%;
  list-style: none;
  cursor: pointer;

  li {
   
    margin-left: 0;
    margin-bottom: 4%;
    &:hover {
      background-color: yellow;
      
    }
  }
`

export const ListItemsContainer = styled.div`
    display: flex;
    span{
      width: 20%;
    }
      
`