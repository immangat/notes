import React, {HTMLAttributes, RefObject} from 'react';
import {IconType} from "react-icons/lib";
import {IconContainerStyles} from "./icon-container.styles";

type IconContainerPropsType = {
    Icon: IconType
    className?: string
    refCustom?: RefObject<HTMLDivElement>
} & HTMLAttributes<HTMLDivElement>
const IconContainer = ({Icon, className, refCustom,...props}: IconContainerPropsType) => {
    return (
        <IconContainerStyles
            className={className}
            {...props}
            ref={refCustom}
        >
            <Icon
                size={20}
            />
        </IconContainerStyles>
    );
};

export default IconContainer;