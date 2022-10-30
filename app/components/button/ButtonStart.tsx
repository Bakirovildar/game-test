import Link from "next/link"
import { StyledButtonStart } from "./StyledButtonStart"

interface ICount {
    title: string
}

export function ButtonStart({title}: ICount) {
    return (
        <StyledButtonStart>
            <Link href={'/Game'}>
                {title}
            </Link>
        </StyledButtonStart>
    )
}
