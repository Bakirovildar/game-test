import {MenuComponent} from "../app/components/menuComponent/MenuComponent";
import {StyledMenuComponent} from "../styles/styledMenuComponent";
import {Button} from "../app/components/button/Button";
import {ButtonStart} from "../app/components/button/ButtonStart";
import MainLayout from "../app/components/MainLayout";
import {useState} from "react";

const Menu = () => {
    const [valueData, setValueData]:any = useState([
        {id: 1, text: '1'},
        {id: 2, text: '2'},
        {id: 3, text: '3'},
        {id: 4, text: '4'},
        {id: 5, text: '5'},
    ])

    const [arrValue] = useState([
        {id: 'A', text:'A'},
        {id: 9, text:'9'},
        {id: 19, text:'19'},
        {id: 50, text:'50'},
        {id: 99, text:'99'},
        {id: 999, text:'999'}
])

    const valueSliderHandle = (num: number) => {
        console.log('change, ', num)
    }

    const clickPlayHandle = () => {

    }

    return (
        <MainLayout>
            <StyledMenuComponent>
                <div className='module'>
                    <MenuComponent title='Кол-во предметов' valueSliderHandle={valueSliderHandle} value={valueData}/>
                    <MenuComponent title='Значения' valueSliderHandle={valueSliderHandle} value={arrValue}/>

                    <div className='buttons'>
                        <Button title='По возрастанию'/>
                        <div className='br'/>
                        <Button title='По убыванию'/>
                    </div>

                    <ButtonStart title='Играть' clickPlayHandle={clickPlayHandle}/>
                </div>
            </StyledMenuComponent>
        </MainLayout>
    )
}

export default Menu
