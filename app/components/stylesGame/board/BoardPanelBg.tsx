import {BoardPanelBgFlowers} from "../flowers/BoardPanelBgFlowers";
import {BoardPanelBgNewYear} from "../new year/BoardPanelBgNewYear";
import {BoardPanelBgMoney} from "../money/BoardPanelBgMoney";
import {BoardPanelBgBiscuit} from "../biscuit/BoardPanelBgBiscuit";
import React from "react";

interface IBoardBg {
    theme: number
}

export const BoardPanelBg = ({theme}: IBoardBg) => {
    return (
        <>
            {
                theme === 0 ? <BoardPanelBgFlowers/> : ''
            }
            {
                theme === 1 ? <BoardPanelBgNewYear/> : ''
            }
            {
                theme === 2 ? <BoardPanelBgMoney/> : ''
            }
            {
                theme === 3 ? <BoardPanelBgBiscuit/> : ''
            }

        </>
    )
}
