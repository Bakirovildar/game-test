import {StyledButton} from "./StyledButton"

interface ICount {
    title: string
    isActive: boolean
    handleClickButton: (title: string) => void
}

export function Button({title,isActive, handleClickButton}: ICount) {

    return (
        <StyledButton
            onClick={() => handleClickButton(title)}
            active={isActive}>
            {title}
        </StyledButton>
    )
}
