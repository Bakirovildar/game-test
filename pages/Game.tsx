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
import {filterIcons} from "../app/utils/filterIcons";
import {iconName} from "../app/utils/iconName";

const Game = () => {
    const [settingsValue, setSettingsValue]: any = useState({})

    const [numbers, setNumbers]: any = useState([])
    const [sortNumbers, setSortNumbers]: any = useState([])

    const [iconsName, setIconsName] = useState('')

    const [startNumber, setStartNumber] = useState(0)

    const [rightNumber, setRightNumber] = useState(0)
    const [allRightNumbers, setAllRightNumbers]: any = useState([])

    useEffect(() => {
        const settings: any = localStorage.getItem('settingValue')
        setSettingsValue(JSON.parse(settings))
    }, [])

    useEffect(() => {
        const randomNumbers = filterIcons(settingsValue.count, settingsValue.value)
        setNumbers(randomNumbers)
        setIconsName(iconName(settingsValue.numberTheme))

        const rightNumbers = [
            {'asc': settingsValue.value === 1
                    ? [...randomNumbers].sort((a: any, b: any) => b - a).sort().reverse()
                    :  [...randomNumbers].sort((a: any, b: any) => b - a)
            },
            {'desc': settingsValue.value === 1
                    ? [...randomNumbers].sort((a: any, b: any) => a - b).sort()
                    : [...randomNumbers].sort((a: any, b: any) => a - b)}
        ]

        console.log('rightNumbers', rightNumbers)

        setSortNumbers(rightNumbers)
    }, [settingsValue])

    useEffect(() => {
        if (rightNumber !== 0) {
            setNumbers(numbers.filter((num: number) => num !== rightNumber))
        }
    }, [rightNumber])

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
                    numbers={numbers}
                    iconsName={iconsName}
                />
            </StyledGamePages>
        </MainLayout>
    )
}

export default Game
