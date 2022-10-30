import { StyledValueMenu } from "./styledValueMenu";

interface IValueMenu {
    value: Array<any>
}

export function ValueMenu({value}: IValueMenu) {

    return (
        <StyledValueMenu widthCount={value}>
            <div className='numbers'>
                {
                    value.map((i): any => <div key={i}>{i}</div>)
                }
            </div>

            <div className='countBox'>
                <div className='circle'/>
            </div>
        </StyledValueMenu>
    )
}
