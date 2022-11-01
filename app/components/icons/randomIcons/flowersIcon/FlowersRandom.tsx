import {FlowersIcon1} from "./FlowersIcon1";
import {FlowersIcon2} from "./FlowersIcon2";
import {FlowersIcon3} from "./FlowersIcon3";
import {FlowersIcon4} from "./FlowersIcon4";

export const FlowersRandom = ({randomNum}: {randomNum: number}) => {
    return (
        <div>
            {
                randomNum === 0 ? <FlowersIcon1/> : ''
            }

            {
                randomNum === 1 ? <FlowersIcon2/> : ''
            }

            {
                randomNum === 2 ? <FlowersIcon3/> : ''
            }

            {
                randomNum === 3 ? <FlowersIcon4/> : ''
            }
        </div>

    )
}
