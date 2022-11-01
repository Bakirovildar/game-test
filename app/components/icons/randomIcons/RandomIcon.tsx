import {BiscuitRandom} from "./biscuit1/BiscuitRandom";
import {FlowersRandom} from "./flowersIcon/FlowersRandom";
import {MoneyRandom} from "./moneyIcons/MoneyRandom";
import {NewYearRandom} from "./newYearIcons/NewYearRandom";

interface IRandomIcon {
    theme: number
}

export const RandomIcon = ({theme}: IRandomIcon) => {
    return (
        <>
            {
                theme === 0 ? <FlowersRandom/> : ''
            }
            {
                theme === 1 ? <NewYearRandom/> : ''
            }
            {
                theme === 2 ? <MoneyRandom/> : ''
            }
            {
                theme === 3 ? <BiscuitRandom/> : ''
            }
        </>
    )
}
