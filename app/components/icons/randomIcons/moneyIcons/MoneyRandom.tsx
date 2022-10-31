import {MoneyIcon3} from "./MoneyIcon3";
import {MoneyIcon2} from "./MoneyIcon2";
import {MoneyIcon1} from "./MoneyIcon1";
import {useEffect, useState} from "react";

export const MoneyRandom = () => {
    const [randomNum, setRandomNum] = useState(0)

    useEffect(() => {
        setRandomNum(Math.floor(Math.random()*3))
    }, [])

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
        </div>

    )
}
