import { StyledDragIcon } from "../../../../styles/styledGamePage";
import {DragIconSvg} from "../../icons/DragIconSvg";
import {useEffect, useState} from "react";

interface IDragIcon {
    numberTheme: number
    countIcon: number
}

export const DragIcon = ({numberTheme,countIcon}: IDragIcon) => {
    const [numbers, setNumbers]: any = useState([])
    const [iconsName, setIconsName] = useState('')

    useEffect(() => {
        const num = []
        for (let i = 0; i < countIcon; i++) {
            num.push(i)
        }
        setNumbers(num)

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
                    numbers.map((icon:number, index: number) => (
                        index % 2 !== 0
                            ? <div key={index} className='dragIcon'><span>2</span><DragIconSvg iconsName={iconsName} /></div>
                            : <div key={index} className='dragIcon' style={{marginTop: '90px'}}><span>7</span><DragIconSvg iconsName={iconsName} /></div>
                    ))
                }
            </div>
        </StyledDragIcon>
    )
}
