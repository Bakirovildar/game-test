import {StyledGamePages} from "../styles/styledGamePage"
import {BgFlowers} from "../app/components/stylesGame/flowers/BgFlowers";
import {BoardBiscuit} from "../app/components/stylesGame/biscuit/BoardBiscuit";
import {DragIcon} from "../app/components/stylesGame/general/DragIcon";
import MainLayout from "../app/components/MainLayout";
import {useEffect, useState} from "react";
import {BgNewYear} from "../app/components/stylesGame/new year/BgNewYear";
import {BgMoney} from "../app/components/stylesGame/money/BgMoney";
import {BgBiscuit} from "../app/components/stylesGame/biscuit/BgBiscuit";
import {BoardFlowers} from "../app/components/stylesGame/flowers/BoardFlowers";
import {BoardNewYear} from "../app/components/stylesGame/new year/BoardNewYear";
import {BoardMoney} from "../app/components/stylesGame/money/BoardMoney";
import {getRandomIcons} from "../app/utils/getRandomIcons";
import {ModalEndGame} from "../app/components/ModalEndGame";
import {getSettings, IGameSettings} from "../app/utils/settingsService";


const Game = () => {
    const [settingsValue, setSettingsValue]: any = useState<IGameSettings | Object>({})

    const [randomIcons, setRandomIcons] = useState([])
    const [sortNumbers, setSortNumbers]: any = useState([])

    const [startNumber, setStartNumber] = useState(0)

    const [rightNumber, setRightNumber] = useState(0)
    const [allRightNumbers, setAllRightNumbers]: any = useState([])

    const [isEndGame, setIsEndGame] = useState(false)

    useEffect(() => {
        setSettingsValue(getSettings())
    }, [])

    useEffect(() => {
        const randomIcons = getRandomIcons(settingsValue.count, settingsValue.value)
        setRandomIcons(randomIcons)

        const rightNumbers = [
            {
                'asc': settingsValue.value === 1
                    ? [...randomIcons].sort((a: any, b: any) => b - a).sort()
                    : [...randomIcons].sort((a: any, b: any) => b - a)
            },
            {
                'desc': settingsValue.value === 1
                    ? [...randomIcons].sort((a: any, b: any) => a - b).sort()
                    : [...randomIcons].sort((a: any, b: any) => a - b)
            }
        ]

        setSortNumbers(rightNumbers)
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
        setStartNumber(iconNumber)
    }

    const dropHandler = (event: any, endNumber: any) => {
        if (endNumber === startNumber) {
            setRightNumber(endNumber)

            setAllRightNumbers([...allRightNumbers, endNumber])
        }
        event.preventDefault()
    }

    return (
        <MainLayout>
            <StyledGamePages bgColor={'#DEC6AA'}>
                {
                    settingsValue.numberTheme === 0 ? <><BgFlowers/> <BoardFlowers dropHandler={dropHandler}
                                                                                   allRightNumbers={allRightNumbers}
                                                                                   countIcon={sortNumbers}
                                                                                   settingsValue={settingsValue}/></> : ''
                }
                {
                    settingsValue.numberTheme === 1 ? <><BgNewYear/> <BoardNewYear dropHandler={dropHandler}
                                                                                   allRightNumbers={allRightNumbers}
                                                                                   countIcon={sortNumbers}
                                                                                   settingsValue={settingsValue}/></> : ''
                }
                {
                    settingsValue.numberTheme === 2 ? <><BgMoney/> <BoardMoney dropHandler={dropHandler}
                                                                               allRightNumbers={allRightNumbers}
                                                                               countIcon={sortNumbers}
                                                                               settingsValue={settingsValue}/></> : ''
                }
                {
                    settingsValue.numberTheme === 3 ? <><BgBiscuit/> <BoardBiscuit dropHandler={dropHandler}
                                                                                   allRightNumbers={allRightNumbers}
                                                                                   countIcon={sortNumbers}
                                                                                   settingsValue={settingsValue}/></> : ''
                }

                <DragIcon
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
