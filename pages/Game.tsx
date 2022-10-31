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
    const [settingsValue, setSettingsValue]:any = useState({})

    const [numbers, setNumbers]: any = useState([])
    const [iconsName, setIconsName] = useState('')

    useEffect(() => {
        const settings:any = localStorage.getItem('settingValue')
        setSettingsValue(JSON.parse(settings))
    }, [])

    useEffect(() => {
        setNumbers(filterIcons(settingsValue.count, settingsValue.value))
        setIconsName(iconName(settingsValue.numberTheme))
    }, [settingsValue])

    return (
        <MainLayout>
            <StyledGamePages bgColor={'#DEC6AA'}>
                {
                    settingsValue.numberTheme === 0 ? <><BgFlowers/> <BoardFlowers countIcon={numbers} isAscending={settingsValue.isAscending}/></> : ''
                }
                {
                    settingsValue.numberTheme === 1 ? <><BgNewYear/> <BoardNewYear countIcon={numbers} isAscending={settingsValue.isAscending}/></> : ''
                }
                {
                    settingsValue.numberTheme === 2 ? <><BgMoney/> <BoardMoney countIcon={numbers} isAscending={settingsValue.isAscending}/></> : ''
                }
                {
                    settingsValue.numberTheme === 3 ? <><BgBiscuit/> <BoardBiscuit countIcon={numbers} isAscending={settingsValue.isAscending}/></>: ''
                }

                <DragIcon
                    numbers={numbers}
                    iconsName={iconsName}
                />
            </StyledGamePages>
        </MainLayout>
    )
}

export default Game
