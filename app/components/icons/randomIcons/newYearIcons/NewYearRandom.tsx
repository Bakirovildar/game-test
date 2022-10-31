import {NewYearIcon4} from "./NewYearIcon4";
import {NewYearIcon3} from "./NewYearIcon3";
import {NewYearIcon2} from "./NewYearIcon2";
import {NewYearIcon1} from "./NewYearIcon1";
import {useEffect, useState} from "react";

export const NewYearRandom = () => {
    const [randomNum, setRandomNum] = useState(0)

    useEffect(() => {
        setRandomNum(Math.floor(Math.random()*4))
    }, [])

    return (
        <div>
            {
                randomNum === 0 ? <NewYearIcon1 /> : ''
            }

            {
                randomNum === 1 ? <NewYearIcon2/> : ''
            }

            {
                randomNum === 2 ? <NewYearIcon3/> : ''
            }

            {
                randomNum === 3 ? <NewYearIcon4/> : ''
            }
        </div>

    )
}
