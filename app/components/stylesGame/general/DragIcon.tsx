import {StyledDragIcon} from "../../../../styles/styledGamePage";
import {DragIconSvg} from "../../icons/DragIconSvg";
import React from "react";

export interface IDragIcon {
    numbers: Array<any>
    iconsName: string
}

export const DragIcon = ({numbers, iconsName}: IDragIcon) => {

    const dragStartHandler = (event: any, iconNumber: number) => {
        console.log('startNum: ', iconNumber)
    }

    const dropHandler = (event: any, iconNumber: number) => {
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
                                onDrop={event => dropHandler(event, icon)}
                                onDragStart={event => dragStartHandler(event, icon)}
                                onDragOver={event => dragOverHandler(event)}
                                className='dragIcon'
                            >
                                <span>{icon}</span>
                                <DragIconSvg
                                    iconsName={iconsName}/>
                            </div>

                            : <div
                                key={index}
                                draggable={"true"}
                                onDrop={event => dropHandler(event, icon)}
                                onDragStart={event => dragStartHandler(event, icon)}
                                onDragOver={event => dragOverHandler(event)}
                                className='dragIcon'
                                style={{marginTop: '90px'}}
                            >
                                <span>{icon}</span>
                                <DragIconSvg iconsName={iconsName}/>
                            </div>
                    ))
                }
            </div>
        </StyledDragIcon>
    )
}
