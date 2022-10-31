import {Count} from "./count/count";
import {ValueMenu} from "./ValueMenu/ValueMenu";

interface IMenu {
    title: string
    value: Array<any>
    valueSliderHandle: any
}

export function MenuComponent({title, value, valueSliderHandle}: IMenu) {
    return (
        <div>
            <Count title={title} />
            <ValueMenu valueSliderHandle={valueSliderHandle} value={value} />
        </div>
    )
}
