import {Biscuit4} from "./Biscuit4";
import {Biscuit3} from "./Biscuit3";
import {Biscuit2} from "./Biscuit2";
import {Biscuit1} from "./Biscuit1";

export const BiscuitRandom = ({randomNum}: {randomNum: number}) => {
    return (
        <div>
            {
                randomNum === 0 ? <Biscuit1 /> : ''
            }

            {
                randomNum === 1 ? <Biscuit2/> : ''
            }

            {
                randomNum === 2 ? <Biscuit3/> : ''
            }

            {
                randomNum === 3 ? <Biscuit4/> : ''
            }
        </div>

    )
}
