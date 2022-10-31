import {Biscuit1} from "./biscuit1/Biscuit1";

interface IBiscuitIcons {
    index: number
}

export const BiscuitIcons = ({index}: IBiscuitIcons) => {


    return (
        <div>
            {index === 0 ? <Biscuit1/> : ''}
        </div>
    )
}
