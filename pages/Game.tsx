import {StyledGamePages} from "../styles/styledGamePage"
import {BgFlowers} from "../app/components/stylesGame/flowers/BgFlowers";
import {BoardBiscuit} from "../app/components/stylesGame/biscuit/BoardBiscuit";

const Game = () => {
    return (
        <StyledGamePages bgColor={'#DEC6AA'}>
            <BgFlowers/>
            <BoardBiscuit/>
        </StyledGamePages>
    )
}

export default Game
