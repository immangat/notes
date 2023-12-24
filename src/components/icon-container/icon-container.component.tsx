import React, {HTMLAttributes} from 'react';
import {IconType} from "react-icons/lib";
import {IconContainerStyles} from "./icon-container.styles";

type IconContainerPropsType = {
    Icon: IconType
    className?: string
} & HTMLAttributes<HTMLDivElement>
const IconContainer = ({Icon, className, ...props}: IconContainerPropsType) => {
    return (
        <IconContainerStyles
            className={className}
            {...props}
        >
            <Icon
                size={20}
            />
        </IconContainerStyles>
    );
};

export default IconContainer;