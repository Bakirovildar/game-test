import {StyledGamePages} from "../styles/styledGamePage"
import {BgMoney} from "../app/components/backgrounds/money/BgMoney";
import {BgNewYear} from "../app/components/backgrounds/new year/BgNewYear";

const Game = () => {
    return (
        <StyledGamePages bgColor={'#DEC6AA'}>
            <BgNewYear/>
        </StyledGamePages>
    )
}

export default Game
