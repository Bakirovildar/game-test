import {RandomIcon} from "./randomIcons/RandomIcon";

interface IDragIconSvg {
    iconsName: string
}

export const DragIconSvg = ({iconsName}: IDragIconSvg) => {

    return (
        <>
            {
                <RandomIcon iconName={iconsName}/>
            }
        </>
    )
}
