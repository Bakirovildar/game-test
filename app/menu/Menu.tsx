import {StyledMenu} from "./styledMenu";
import {Count} from "./count/count";

export function Menu() {
    return (
        <StyledMenu>
            <Count title='Кол-во предметов' />
        </StyledMenu>
    )
}
