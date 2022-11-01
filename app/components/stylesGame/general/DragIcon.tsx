import {StyledDragIcon} from "../../../../styles/styledGamePage";
import React from "react";
import {RandomIcon} from "../../icons/randomIcons/RandomIcon";

export interface IDragIcon {
    numbers: Array<any>
    theme: number
    dragStartHandler: (event: any, icon: any) => void
}

export const DragIcon = ({numbers, theme, dragStartHandler}: IDragIcon) => {

    const dropHandler = (event: any) => {
        event.preventDefault()
        console.log('drop: ', event)
    }

    const dragOverHandler = (event: any) => {
        event.preventDefault()
    }

    return (
        <StyledDragIcon>
            <div className='dragIconContent'>
                {
                    numbers.map((icon: any, index: number) => (
                        index % 2 !== 0
                            ? <div
                                key={index}
                                draggable={"true"}
                                onDrop={event => dropHandler(event)}
                                onDragStart={event => dragStartHandler(event, icon)}
                                onDragOver={event => dragOverHandler(event)}
                                className='dragIcon'
                            >
                                <span>{icon}</span>
                                <RandomIcon
                                    theme={theme}/>
                            </div>

                            : <div
                                key={index}
                                draggable={"true"}
                                onDrop={event => dropHandler(event)}
                                onDragStart={event => dragStartHandler(event, icon)}
                                onDragOver={event => dragOverHandler(event)}
                                className='dragIcon'
                                style={{marginTop: '90px'}}
                            >
                                <span>{icon}</span>
                                <RandomIcon theme={theme}/>
                            </div>
                    ))
                }
            </div>
        </StyledDragIcon>
    )
}
