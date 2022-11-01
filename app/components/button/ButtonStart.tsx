import Link from "next/link"
import {StyledButtonStart} from "./StyledButtonStart"

interface ICount {
    title: string
    clickPlayHandle: () => void
}

export function ButtonStart({title, clickPlayHandle}: ICount) {
    return (

        <Link href={'/Game'}>
            <StyledButtonStart onClick={clickPlayHandle}>
                {title}
            </StyledButtonStart>
        </Link>
    )
}
