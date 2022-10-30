import { StyledValueMenu } from "./styledValueMenu";

export function ValueMenu() {
    const arr = [0,1,2,3]

    return (
        <StyledValueMenu widthCount={arr}>
            <div className='numbers'>
                {
                    arr.map((i): any => <div key={i}>{i}</div>)
                }
            </div>

            <div className='countBox'>
                <div className='circle'/>
            </div>
        </StyledValueMenu>
    )
}
