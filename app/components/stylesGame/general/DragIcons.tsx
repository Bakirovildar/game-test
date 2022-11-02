import {StyledDragIcon} from "../../../../styles/styledGamePage";
import React from "react";
import {RandomIcon} from "../../icons/randomIcons/RandomIcon";

export interface IDragIcons {
    numbers: Array<any>
    theme: number
    dragStartHandler: (event: any, icon: any) => void
}

function getIcon(index: number,
                 dropHandler: (event: any) => void,
                 dragStartHandler: (event: any, icon: any) => void,
                 icon: any,
                 dragOverHandler: (event: any) => void,
                 theme: number,
                 randomNum: number) {

    return <div
        key={index}
        draggable={"true"}
        onDrop={event => dropHandler(event)}
        onDragStart={event => dragStartHandler(event, icon)}
        onDragOver={event => dragOverHandler(event)}
        className='dragIcon'
        style={{marginTop: `${index % 2 === 0 ? '90px' : '0px'}`}}
    >
        <span>{icon}</span>
        <RandomIcon
            randomNum={randomNum}
            theme={theme}/>
    </div>;
}

export const getNumberForIcon = (icon: any) => icon % 4 || icon.toString().charCodeAt(0) % 4

export const DragIcons = ({numbers, theme, dragStartHandler}: IDragIcons) => {

    const dropHandler = (event: any) => {
        event.preventDefault()
    }

    const dragOverHandler = (event: any) => {
        event.preventDefault()
    }

    return (
        <StyledDragIcon>
            <div className='dragIconContent'>
                {
                    numbers.map((icon: any, index: number) => (
                        getIcon(index, dropHandler, dragStartHandler, icon, dragOverHandler, theme, getNumberForIcon(icon))
                    ))
                }
            </div>
        </StyledDragIcon>
    )
}
