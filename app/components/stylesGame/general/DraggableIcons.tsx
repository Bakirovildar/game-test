import {StyledDragIcons} from "../../../../styles/styledGamePage";
import React from "react";
import {DraggableIcon} from "./DraggableIcon";

export interface IDragIcons {
    numbers: Array<any>
    theme: number
    dragStartHandler: (event: any, icon: any) => void
}

export const getNumberForIcon = (icon: any) => icon % 4 || icon.toString().charCodeAt(0) % 4

export const DraggableIcons = ({numbers, theme, dragStartHandler}: IDragIcons) => {

    return (
        <StyledDragIcons>
            <div className='dragIconContent'>
                {
                    numbers.map((icon: any, index: number) => (
                        <DraggableIcon key={index}
                                       index={index}
                                       dragStartHandler={dragStartHandler}
                                       icon={icon}
                                       theme={theme}
                                       randomNum={getNumberForIcon(icon)}/>
                    ))
                }
            </div>
        </StyledDragIcons>
    )
}
