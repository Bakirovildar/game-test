import {BiscuitRandom} from "./biscuit1/BiscuitRandom";
import {FlowersRandom} from "./flowersIcon/FlowersRandom";
import {MoneyRandom} from "./moneyIcons/MoneyRandom";
import {NewYearRandom} from "./newYearIcons/NewYearRandom";

interface IRandomIcon {
    iconName: string
}

export const RandomIcon = ({iconName}: IRandomIcon) => {
    return (
        <>
            {
                iconName === 'BiscuitIcons' ? <BiscuitRandom/> : ''
            }
            {
                iconName === 'FlowersIcons' ? <FlowersRandom/> : ''
            }
            {
                iconName === 'MoneyIcons' ? <MoneyRandom/> : ''
            }
            {
                iconName === 'NewYearIcons' ? <NewYearRandom/> : ''
            }
        </>
    )
}
