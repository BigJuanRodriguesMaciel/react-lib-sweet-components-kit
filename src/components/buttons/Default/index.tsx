import React, { FC } from "react";
import './styles.modules.scss'
import { DefaultCustomProps } from "./types";

export const ButtonDefault: FC<DefaultCustomProps> = ({styles, text, icon, anchorHRef = false,  ...rest}) => {
    const CustomTag  = anchorHRef ? 'a' : 'button'
    return (
        <CustomTag {...anchorHRef && {href: '#'}} style={{background: styles?.bg, width: text ? "100%" : "50px"}} className='default-button  border-radius-default position-relative' {...rest}>
            {text}
            {
                icon && <i style={{background: styles?.iconBg}} className="position-absolute border-radius-full centralize-y">{icon}</i>
            }
        </CustomTag>
    )
}   