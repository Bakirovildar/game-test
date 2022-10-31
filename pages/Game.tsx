import {StyledGamePages} from "../styles/styledGamePage"
import {BgFlowers} from "../app/components/stylesGame/flowers/BgFlowers";
import {BoardBiscuit} from "../app/components/stylesGame/biscuit/BoardBiscuit";
import {DragIcon} from "../app/components/stylesGame/general/DragIcon";
import MainLayout from "../app/components/MainLayout";

const Game = () => {
    return (
        <MainLayout>
            <StyledGamePages bgColor={'#DEC6AA'}>
                <BgFlowers/>
                <DragIcon />
                <BoardBiscuit/>
            </StyledGamePages>
        </MainLayout>
    )
}

export default Game
