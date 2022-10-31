import { StyledDragIcon } from "../../../../styles/styledGamePage";
import {DragIconSvg} from "../../icons/DragIconSvg";

export const DragIcon = () => {
    const numbers: any= [2, 5, 6, 8, 8]

    return (
        <StyledDragIcon>
            <div className='dragIconContent'>
                {
                    numbers.map((icon:number, index: number) => (
                        index % 2 !== 0
                            ? <div key={index} className='dragIcon'><span>2</span><DragIconSvg iconsName='NewYearIcons' /></div>
                            : <div key={index} className='dragIcon' style={{marginTop: '90px'}}><span>7</span><DragIconSvg iconsName='NewYearIcons' /></div>
                    ))
                }
            </div>
        </StyledDragIcon>
    )
}
