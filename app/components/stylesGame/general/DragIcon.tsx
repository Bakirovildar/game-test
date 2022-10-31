import { StyledDragIcon } from "../../../../styles/styledGamePage";
import {DragIconSvg} from "../../icons/DragIconSvg";
import {useEffect, useState} from "react";
import {filterIcons} from "../../../utils/filterIcons";

export interface IDragIcon {
    numberTheme?: number
    countIcon: number
    value: number
}

export const DragIcon = ({numberTheme,countIcon, value}: IDragIcon) => {
    const [numbers, setNumbers]: any = useState([])
    const [iconsName, setIconsName] = useState('')

    useEffect(() => {
        setNumbers(filterIcons(countIcon, value))

        if (numberTheme === 0) {
            setIconsName('FlowersIcons')
        }
        if (numberTheme === 1) {
            setIconsName('NewYearIcons')
        }
        if (numberTheme === 2) {
            setIconsName('MoneyIcons')
        }
        if (numberTheme === 3) {
            setIconsName('BiscuitIcons')
        }
    }, [countIcon])

    return (
        <StyledDragIcon>
            <div className='dragIconContent'>
                {
                    numbers.map((icon:any, index: number) => (
                        index % 2 !== 0
                            ? <div key={index} className='dragIcon'><span>{icon}</span><DragIconSvg iconsName={iconsName} /></div>
                            : <div key={index} className='dragIcon' style={{marginTop: '90px'}}><span>{icon}</span><DragIconSvg iconsName={iconsName} /></div>
                    ))
                }
            </div>
        </StyledDragIcon>
    )
}
