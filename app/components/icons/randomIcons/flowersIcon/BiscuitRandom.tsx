import {FlowersIcon4} from "./FlowersIcon4";
import {FlowersIcon3} from "./FlowersIcon3";
import {FlowersIcon2} from "./FlowersIcon2";
import {FlowersIcon1} from "./FlowersIcon1";
import {useEffect, useState} from "react";

export const BiscuitRandom = () => {
    const [randomNum, setRandomNum] = useState(0)

    useEffect(() => {
        setRandomNum(Math.floor(Math.random()*4))
    }, [])

    return (
        <div>
            {
                randomNum === 0 ? <FlowersIcon1 /> : ''
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
