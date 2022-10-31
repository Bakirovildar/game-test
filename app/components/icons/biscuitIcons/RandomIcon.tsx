import {useState} from "react";
import {BiscuitRandom} from "./biscuit1/BiscuitRandom";

interface IRandomIcon {
    iconName: string
}

export const RandomIcon = ({iconName}: IRandomIcon) => {
    const [nameIcons] = useState(['BiscuitIcons', 'FlowersIcons', 'MoneyIcons', 'NewYearIcons'])
    return (
        <>
            {
                iconName === 'BiscuitIcons' ? <BiscuitRandom/> : ''
            }
        </>
    )
}
