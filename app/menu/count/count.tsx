import {StyledCount} from "./styledCount";

interface ICount {
    title: string
}

export function Count({title}: ICount) {
    return (
        <StyledCount>
            {title}
        </StyledCount>
    )
}
