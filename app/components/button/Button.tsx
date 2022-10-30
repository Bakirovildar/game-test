import {StyledButton} from "./StyledButton"
import {useState} from "react";

interface ICount {
    title: string
}

export function Button({title}: ICount) {
    const [isActive, setIsActive] = useState(false)

    const handleClickButton = () => {
        setIsActive(!isActive)
    }

    return (
        <StyledButton
            onClick={handleClickButton}
            active={isActive}>
            {title}
        </StyledButton>
    )
}
