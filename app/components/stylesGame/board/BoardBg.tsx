import {BoardBgFlowers} from "../flowers/BoardBgFlowers";
import {BoardBgNewYear} from "../new year/BoardBgNewYear";
import {BoardBgMoney} from "../money/BoardBgMoney";
import {BoardBgBiscuit} from "../biscuit/BoardBgBiscuit";

interface IBoardBg {
    theme: number
}

export const BoardBg = ({theme}: IBoardBg) => {
    return (
        <>
            {
                theme === 0 ? <BoardBgFlowers/> : ''
            }
            {
                theme === 1 ? <BoardBgNewYear/> : ''
            }
            {
                theme === 2 ? <BoardBgMoney/> : ''
            }
            {
                theme === 3 ? <BoardBgBiscuit/> : ''
            }
        </>
    )
}
