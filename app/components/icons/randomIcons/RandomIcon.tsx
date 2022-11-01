import {BiscuitRandom} from "./biscuit1/BiscuitRandom";
import {FlowersRandom} from "./flowersIcon/FlowersRandom";
import {MoneyRandom} from "./moneyIcons/MoneyRandom";
import {NewYearRandom} from "./newYearIcons/NewYearRandom";

interface IRandomIcon {
    theme: number
    randomNum: number
}

export const RandomIcon = ({theme, randomNum}: IRandomIcon) => {
    return (
        <>
            {
                theme === 0 ? <FlowersRandom randomNum={randomNum}/> : ''
            }
            {
                theme === 1 ? <NewYearRandom randomNum={randomNum}/> : ''
            }
            {
                theme === 2 ? <MoneyRandom randomNum={randomNum}/> : ''
            }
            {
                theme === 3 ? <BiscuitRandom randomNum={randomNum}/> : ''
            }
        </>
    )
}
