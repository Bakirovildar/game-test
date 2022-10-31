import {StyledDragIcon} from "../../../../styles/styledGamePage";
import {DragIconSvg} from "../../icons/DragIconSvg";
import {useEffect, useState} from "react";
import {filterIcons} from "../../../utils/filterIcons";
import {iconName} from "../../../utils/iconName";

export interface IDragIcon {
    numberTheme?: number
    countIcon: number
    value: number
}

export const DragIcon = ({numberTheme, countIcon, value}: IDragIcon) => {
    const [numbers, setNumbers]: any = useState([])
    const [iconsName, setIconsName] = useState('')

    useEffect(() => {
        setNumbers(filterIcons(countIcon, value))
        setIconsName(iconName(numberTheme))
    }, [countIcon])

    return (
        <StyledDragIcon>
            <div className='dragIconContent'>
                {
                    numbers.map((icon: any, index: number) => (
                        index % 2 !== 0
                            ? <div key={index} className='dragIcon'><span>{icon}</span><DragIconSvg
                                iconsName={iconsName}/></div>
                            : <div key={index} className='dragIcon' style={{marginTop: '90px'}}>
                                <span>{icon}</span><DragIconSvg iconsName={iconsName}/></div>
                    ))
                }
            </div>
        </StyledDragIcon>
    )
}
