import {IGameSettings} from "../../../utils/settingsService";
import React, {useEffect, useState} from "react";
import {StyledBoard} from "../../../../styles/styledGamePage";
import {Asendings} from "../../asending/Asending";
import {Descending} from "../../asending/Descending";
import {getMaximum, getMinimum} from "../../../utils/numberUtils";
import {RandomIcon} from "../../icons/randomIcons/RandomIcon";
import {getNumberForIcon} from "../general/DraggableIcons";
import {BoardPanelBg} from "./BoardPanelBg";
import {BoardBg} from "./BoardBg";

export interface IBoard {
    settingsValue: IGameSettings
    sortedIcons: Array<number>
    dropHandler: (event: any, icon: number) => void
    allRightNumbers: Array<number>
}

export const Board = ({settingsValue, sortedIcons, dropHandler, allRightNumbers}: IBoard) => {
    const [icons, setIcons]: any = useState([])

    useEffect(() => {
        setIcons(sortedIcons)
    }, [sortedIcons])

    const dragOverHandler = (event: any) => {
        event.preventDefault()
    }

    return (
        <>
            <BoardBg theme={settingsValue.numberTheme}/>
            <StyledBoard>
                <div className='board-container'>
                    {
                        settingsValue.isAscending ? <div className='asend'><Asendings/></div> :
                            <div className='desc'><Descending/></div>
                    }

                    <div className='board'>
                        {
                            settingsValue.isAscending &&
                            <div style={{position: "relative"}}><span
                                className='number'>{settingsValue.value === 1 ? 'A' : getMinimum(icons) - 1}</span>
                                <RandomIcon
                                    randomNum={getNumberForIcon(0)}
                                    theme={settingsValue.numberTheme}/>
                            </div>
                        }

                        {
                            icons.map((icon: any) => {
                                if (allRightNumbers.includes(icon)) {
                                    return <div key={icon} style={{position: "relative"}}>
                                        <span className='number'>{icon}</span>
                                        <RandomIcon
                                            randomNum={getNumberForIcon(icon)}
                                            theme={settingsValue.numberTheme}/>
                                    </div>
                                } else {
                                    return (
                                        <div
                                            onDragOver={event => dragOverHandler(event)}
                                            onDrop={event => dropHandler(event, icon)}
                                            className='circle'
                                            key={icon}
                                        />
                                    )
                                }

                            })
                        }
                        {
                            !settingsValue.isAscending &&
                            <div style={{position: "relative"}}><span
                                className='number'>{settingsValue.value === 1 ? 'Я' : getMaximum(icons) + 1}</span>
                                <RandomIcon
                                    randomNum={getNumberForIcon(3)}
                                    theme={settingsValue.numberTheme}/>
                            </div>
                        }

                    </div>

                </div>

                <BoardPanelBg theme={settingsValue.numberTheme}/>

            </StyledBoard>
        </>
    )
}
