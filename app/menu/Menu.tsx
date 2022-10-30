import {StyledMenu} from "./styledMenu";
import {Count} from "./count/count";
import {ValueMenu} from "../components/ValueMenu/ValueMenu";

export function Menu() {
    return (
        <StyledMenu>
            <Count title='Кол-во предметов' />
            <ValueMenu></ValueMenu>
        </StyledMenu>
    )
}
