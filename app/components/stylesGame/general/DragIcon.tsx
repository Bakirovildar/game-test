import styled from "@emotion/styled";
import {DragIconSvg} from "../../icons/DragIconSvg";

const StyledDragIcon = styled.div`
  position: absolute;
  bottom: 60%;
  width: 100%;
  display: flex;
  justify-content: center;

  @media all and (min-width: 1000px) {
    .dragIcon {
      height: 140px;
      width: 140px;
    }
  }

  @media all and (min-width: 0) and (max-width: 1000px) {
    .dragIcon {
      height: 14vw;
      width: 14vw;
    }
  }

  .dragIconContent {
    display: flex;
    justify-content: space-between;
    
    .dragIcon {
      margin: 0 2px;
    }
  }
`

export const DragIcon = () => {
    const numbers: any= [2, 5, 6, 8, 8]

    return (
        <StyledDragIcon>
            <div className='dragIconContent'>
                {
                    numbers.map((icon:number, index: number) => (
                        index % 2 !== 0
                            ? <div className='dragIcon'><DragIconSvg /></div>
                            : <div className='dragIcon' style={{marginTop: '90px'}}><DragIconSvg /></div>
                    ))
                }
            </div>
        </StyledDragIcon>
    )
}
