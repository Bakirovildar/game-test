import {MenuComponent} from "../app/components/menuComponent/MenuComponent";
import {StyledMenuComponent} from "../styles/styledMenuComponent";
import {Button} from "../app/components/button/Button";
import {ButtonStart} from "../app/components/button/ButtonStart";
import MainLayout from "../app/components/MainLayout";
import {useState} from "react";
import {ISlideValue} from "../app/components/menuComponent/ValueMenu/ValueMenu";

const Menu = () => {
    const [valueSettings, setValueSettings] = useState({})

    const [isActiveDesc, setIsActiveDesc] = useState(false)
    const [isActiveAsc, setIsActiveAsc] = useState(true)

    const [subjectCount]: any = useState([
        {value: '1'},
        {value: '2'},
        {value: '3'},
        {value: '4'},
        {value: '5'},
    ])

    const [range] = useState([
        {value: 'A'},
        {value: '9'},
        {value: '19'},
        {value: '50'},
        {value: '99'},
        {value: '999'}
    ])
    const [countIcon, setCountIcon] = useState(1)
    const [valueIcon, setValueIcon] = useState(1)

    const valueSliderHandle = ({name, value}: ISlideValue) => {
        if (name === 'count') {
            setCountIcon(value)
        }
        if (name === 'value') {
            setValueIcon(value)
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
        const settingsValue: any = {
            count: countIcon,
            value: valueIcon,
            isAscending: isActiveAsc,
            numberTheme: Math.floor(Math.random() * 4)
        }

        localStorage.setItem('settingValue', JSON.stringify(settingsValue))
    }

    return (
        <MainLayout valueSettings={valueSettings}>
            <StyledMenuComponent>
                <div className='module'>
                    <MenuComponent title='Кол-во предметов' valueSliderHandle={valueSliderHandle} value={subjectCount}/>
                    <MenuComponent title='Значения' valueSliderHandle={valueSliderHandle} value={range}/>

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
