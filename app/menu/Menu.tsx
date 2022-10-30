import {MenuComponent} from "../components/menuComponent/MenuComponent";
import { StyledMenuComponent } from "./styledMenuComponent";
import {Button} from "../components/button/Button";

export function Menu() {
    const arrSubject = [1, 2, 3, 4, 5]
    const arrValue = ['A', 9, 19, 50, 99, 999]

    return (
        <StyledMenuComponent>
            <MenuComponent title='Кол-во предметов' value={arrSubject}/>
            <MenuComponent title='Значения' value={arrValue}/>

            <div className='buttons'>
                <Button title='По возрастанию'/>
                <div className='br'/>
                <Button title='По убыванию'/>
            </div>
        </StyledMenuComponent>
    )
}
