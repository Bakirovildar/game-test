import {StyledGamePages} from "../styles/styledGamePage"
import {DragIcons} from "../app/components/stylesGame/general/DragIcons";
import MainLayout from "../app/components/MainLayout";
import {useEffect, useState} from "react";
import {getRandomIcons} from "../app/utils/getRandomIcons";
import {ModalEndGame} from "../app/components/ModalEndGame";
import {getSettings, IGameSettings} from "../app/utils/settingsService";
import {Board} from "../app/components/stylesGame/board/Board";
import {BoardBg} from "../app/components/stylesGame/board/BoardBg";

const Game = () => {
    const [settingsValue, setSettingsValue]: any = useState<IGameSettings | Object>({})

    const [randomIcons, setRandomIcons] = useState([])
    const [sortedNumbers, setSortedNumbers]: any = useState([])

    const [dragIcon, setDragIcon] = useState(0)

    const [rightNumber, setRightNumber] = useState(0)
    const [allRightNumbers, setAllRightNumbers]: any = useState([])

    const [isEndGame, setIsEndGame] = useState(false)

    useEffect(() => {
        setSettingsValue(getSettings())
    }, [])

    useEffect(() => {
        const randomIcons = getRandomIcons(settingsValue.count, settingsValue.value)
        setRandomIcons(randomIcons)

        const sorted = settingsValue.value === 1
            ? [...randomIcons].sort()
            : [...randomIcons].sort((a: any, b: any) => a - b)
        setSortedNumbers(sorted)
    }, [settingsValue])

    useEffect(() => {
        if (rightNumber !== 0) {
            const filter = randomIcons.filter((num: number) => num !== rightNumber)
            setRandomIcons(filter)
        }
    }, [rightNumber])

    useEffect(() => {
        if (allRightNumbers.length && !randomIcons.length) {
            setIsEndGame(true)
        }
    }, [randomIcons])

    const dragStartHandler = (event: any, iconNumber: number) => {
        setDragIcon(iconNumber)
    }

    const dropHandler = (event: any, endNumber: any) => {
        if (endNumber === dragIcon) {
            setRightNumber(endNumber)

            setAllRightNumbers([...allRightNumbers, endNumber])
        }
        event.preventDefault()
    }

    return (
        <MainLayout>
            <StyledGamePages bgColor={'#DEC6AA'}>

                <BoardBg theme={settingsValue.numberTheme}/>
                <Board dropHandler={dropHandler}
                       allRightNumbers={allRightNumbers}
                       sortedIcons={sortedNumbers}
                       settingsValue={settingsValue}/>
                <DragIcons
                    dragStartHandler={dragStartHandler}
                    numbers={randomIcons}
                    theme={settingsValue.numberTheme}
                />

                {
                    isEndGame && <ModalEndGame/>
                }
            </StyledGamePages>
        </MainLayout>
    )
}

export default Game
