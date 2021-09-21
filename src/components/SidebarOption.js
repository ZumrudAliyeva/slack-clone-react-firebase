import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { db } from "../firebase";
import {enterRoom} from "../features/appSlice"

function SidebarOption({ Icon, title, addChannelOption, id }) {
const dispatch = useDispatch()

const addChannel = () => {
    const channelName = prompt('Enter the channel name');
if(channelName) {
    db.collection('rooms').add({
        name: channelName,
    })
}
}

const selectChannel = () => {
    if(id){
        dispatch(enterRoom({
            roomId: id,
        }))
    }
}

  return <SidebarOptionContainer
  onClick={addChannelOption ? addChannel : selectChannel}
  >
      {Icon && <Icon fontSize='small' />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;
padding-left: 10px;

:hover{
    opacity: 0.9;
    background-color: #340e36;
}
> h3{
    font-weight: 500;
    line-height: 28px;
    padding-left: 10px;
    font-size: 15px;
    color: rgb(188,171,188);
}
> h3 > span{
    padding-right: 10px;
}
`;

const SidebarOptionChannel = styled.h3`
    font-weight: 500;
    line-height: 28px;
    font-size: 15px;
    color: rgb(188,171,188);
`;
