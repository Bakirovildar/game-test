import {StyledGamePages} from "../styles/styledGamePage"
import {BgFlowers} from "../app/components/stylesGame/flowers/BgFlowers";
import {BoardBiscuit} from "../app/components/stylesGame/biscuit/BoardBiscuit";
import {DragIcon} from "../app/components/stylesGame/general/DragIcon";

const Game = () => {
    return (
        <StyledGamePages bgColor={'#DEC6AA'}>
            <BgFlowers/>
            <DragIcon />
            <BoardBiscuit/>
        </StyledGamePages>
    )
}

export default Game
