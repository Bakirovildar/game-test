import Link from "next/link"
import { StyledButtonStart } from "./StyledButtonStart"

interface ICount {
    title: string
    clickPlayHandle: () => void
}

export function ButtonStart({title, clickPlayHandle}: ICount) {
    return (
        <StyledButtonStart>
            <Link onClick={clickPlayHandle} href={'/Game'}>
                {title}
            </Link>
        </StyledButtonStart>
    )
}
