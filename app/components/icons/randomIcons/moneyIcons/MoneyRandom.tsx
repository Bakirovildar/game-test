import {MoneyIcon3} from "./MoneyIcon3";
import {MoneyIcon2} from "./MoneyIcon2";
import {MoneyIcon1} from "./MoneyIcon1";

export const MoneyRandom = ({randomNum}: {randomNum: number}) => {
    return (
        <div>
            {
                randomNum === 0 ? <MoneyIcon1 /> : ''
            }

            {
                randomNum === 1 ? <MoneyIcon2/> : ''
            }

            {
                randomNum === 2 ? <MoneyIcon3/> : ''
            }
            {
                randomNum === 3 ? <MoneyIcon2/> : ''
            }
        </div>

    )
}
