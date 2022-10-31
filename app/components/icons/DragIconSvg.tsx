import {BiscuitIcons} from "./biscuitIcons/BiscuitsIcons";

interface IDragIconSvg {
    iconsName: string
    index: number
}

export const DragIconSvg = ({iconsName, index}: IDragIconSvg) => {

    return (
        <div>
            {
                iconsName === 'BiscuitIcons' ? <BiscuitIcons index={index}/> : ''
            }
        </div>
    )
}
