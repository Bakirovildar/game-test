import {StyledMenuComponent} from "../../../styles/styledMenuComponent";
import {Count} from "./count/count";
import {ValueMenu} from "./ValueMenu/ValueMenu";

interface IMenu {
    title: string
    value: Array<any>
}

export function MenuComponent({title, value}: IMenu) {
    return (
        <div>
            <Count title={title} />
            <ValueMenu value={value} />
        </div>
    )
}
