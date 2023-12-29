import React from 'react';
import {IconType} from "react-icons/lib";
import {EmptyMessageContainer} from "./empty-message.styles";

type EmptyMessagePropsType = {
    message: string
    Icon: IconType
}
const EmptyMessage = ({Icon, message}: EmptyMessagePropsType) => {
    return (
        <EmptyMessageContainer>
            <Icon size={100}/>
            <h1>{message}</h1>

        </EmptyMessageContainer>
    );
};

export default EmptyMessage;