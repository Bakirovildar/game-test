import {Count} from "./count/count";
import {ISlideValue, ValueMenu} from "./ValueMenu/ValueMenu";

interface IMenu {
    title: string
    value: Array<any>
    valueSliderHandle: ({}:ISlideValue) => void
}

export function MenuComponent({title, value, valueSliderHandle}: IMenu) {
    return (
        <div>
            <Count title={title} />
            <ValueMenu valueSliderHandle={valueSliderHandle} value={value} />
        </div>
    )
}
