import React from "react";
import {RandomIcon} from "../../icons/randomIcons/RandomIcon";

interface IDraggableIcon {
    index: number,
    dragStartHandler: (event: any, icon: any) => void,
    icon: any,
    theme: number,
    randomNum: number
}

export const DraggableIcon = ({index, dragStartHandler, icon, theme, randomNum}: IDraggableIcon) => {

    return (
        <div
            key={index}
            draggable={"true"}
            onDrop={event => event.preventDefault()}
            onDragStart={event => dragStartHandler(event, icon)}
            onDragOver={event => event.preventDefault()}
            className='dragIcon'
            style={{marginTop: `${index % 2 === 0 ? '90px' : '0px'}`}}
        >
            <span>{icon}</span>
            <RandomIcon randomNum={randomNum} theme={theme}/>
        </div>
    )
}
