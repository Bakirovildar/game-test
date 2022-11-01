import {MenuComponent} from "../app/components/menuComponent/MenuComponent";
import {StyledMenuComponent} from "../styles/styledMenuComponent";
import {Button} from "../app/components/button/Button";
import {ButtonStart} from "../app/components/button/ButtonStart";
import MainLayout from "../app/components/MainLayout";
import {useState} from "react";
import {ISlideValue} from "../app/components/menuComponent/ValueMenu/ValueMenu";
import {IGameSettings, saveSettings} from "../app/utils/settingsService";

const Menu = () => {
    const [valueSettings] = useState({})

    const [isActiveDesc, setIsActiveDesc] = useState(false)
    const [isActiveAsc, setIsActiveAsc] = useState(true)

    const [subjectCountArray]: any = useState(['1', '2', '3', '4', '5'])

    const [rangeArray] = useState(['A', '9', '19', '50', '99', '999'])

    const [subjectCount, setSubjectCount] = useState(1)
    const [range, setRange] = useState(1)

    const valueSliderHandle = ({name, value}: ISlideValue) => {
        if (name === 'count') {
            setSubjectCount(value)
        }
        if (name === 'value') {
            setRange(value)
        }
    }

    const handleClickDesc = (title: string) => {
        if (title === 'По возрастанию') {
            setIsActiveDesc(false)
            setIsActiveAsc(true)
        }
        if (title === 'По убыванию') {
            setIsActiveDesc(true)
            setIsActiveAsc(false)
        }
    }

    const clickPlayHandle = () => {
        const settingsValue: IGameSettings = {
            count: subjectCount,
            value: range,
            isAscending: isActiveAsc,
            numberTheme: Math.floor(Math.random() * 4)
        }

        saveSettings(settingsValue)
    }

    return (
        <MainLayout valueSettings={valueSettings}>
            <StyledMenuComponent>
                <div className='module'>
                    <MenuComponent title='Кол-во предметов' valueSliderHandle={valueSliderHandle} value={subjectCountArray}/>
                    <MenuComponent title='Значения' valueSliderHandle={valueSliderHandle} value={rangeArray}/>

                    <div className='buttons'>
                        <Button isActive={isActiveAsc} handleClickButton={handleClickDesc} title='По возрастанию'/>
                        <div className='br'/>
                        <Button isActive={isActiveDesc} handleClickButton={handleClickDesc} title='По убыванию'/>
                    </div>

                    <ButtonStart title='Играть' clickPlayHandle={clickPlayHandle}/>
                </div>
            </StyledMenuComponent>
        </MainLayout>
    )
}

export default Menu
