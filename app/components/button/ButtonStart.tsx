import { StyledButtonStart } from "./StyledButtonStart"

interface ICount {
    title: string
}

export function ButtonStart({title}: ICount) {
    return (
        <StyledButtonStart>
            {title}
        </StyledButtonStart>
    )
}
