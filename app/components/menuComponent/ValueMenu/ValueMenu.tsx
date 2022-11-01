import {StyledValueMenu} from "./styledValueMenu";
import {useEffect, useState} from "react";

interface IValueMenu {
    value: Array<string>
    valueSliderHandle: ({}: ISlideValue) => void
}

export interface ISlideValue {
    name: string
    value: number
}

export function ValueMenu({value,valueSliderHandle}: IValueMenu) {
    const [valueSlider, setValueSlider] = useState(1)

    useEffect(() => {
        value.length > 5
            ? valueSliderHandle({name: 'value', value: +valueSlider})
            : valueSliderHandle({name: 'count', value: +valueSlider})
    }, [valueSlider])

    const handleChange = (e: any) => {
        setValueSlider(e.target.value)
    }

    return (
        <StyledValueMenu widthCount={value}>
            <div className='numbers'>
                {
                    value.length < 6
                        ? value.map((value: string) => <div className='styleNum1' id={value} key={value}>{value}</div>)
                        : value.map((value: string) => <div className='styleNum' id={value} key={value}>{value}</div>)
                }
            </div>

            <div className='countBox'>
                <input
                    type="range"
                    id='fader'
                    min='1'
                    max={value.length}
                    value={valueSlider}
                    step='1'
                    onChange={e => handleChange(e)}/>
            </div>
        </StyledValueMenu>
    )
}
