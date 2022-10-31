import {BiscuitRandom} from "./biscuit1/BiscuitRandom";

interface IRandomIcon {
    iconName: string
}

export const RandomIcon = ({iconName}: IRandomIcon) => {
    return (
        <>
            {
                iconName === 'BiscuitIcons' ? <BiscuitRandom/> : ''
            }
        </>
    )
}
