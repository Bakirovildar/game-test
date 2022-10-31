import {StyledBoardBiscuit} from "../../../../styles/styledGamePage"
import {useEffect, useState} from "react";
import {FlowersIcon1} from "../../icons/randomIcons/flowersIcon/FlowersIcon1";
import {Descending} from "../../asending/Descending";
import {Asendings} from "../../asending/Asending";

export interface IBoard {
    isAscending: boolean
    countIcon: number
}

export const BoardFlowers = ({isAscending, countIcon}: IBoard) => {
    const [icons, setIcons]: Array<any> = useState([])

    useEffect(() => {
        const count: Array<any> = []
        for (let i = 0; i < countIcon; i++) {
            count.push(i)
        }
        setIcons(count)
    }, [])

    return (
        <StyledBoardBiscuit>
            <div className='board-container'>
                {
                    isAscending ? <div className='asend'><Asendings/></div> : <div className='desc'><Descending/></div>
                }

                <div className='board'>
                    {
                        isAscending &&  <div style={{position: "relative"}}><span className='number'>0</span><FlowersIcon1/></div>
                    }

                    {
                        icons.map((icon: any) => <div className='circle' key={icon}/>)
                    }
                    {
                        !isAscending &&  <div style={{position: "relative"}}><span className='number'>0</span><FlowersIcon1/></div>
                    }

                </div>

            </div>


            <svg xmlns="http://www.w3.org/2000/svg" width="974" height="298" viewBox="0 0 974 298" fill="none"
                 className="__web-inspector-hide-shortcut__">
                <g filter="url(#filter0_d_1_175)">
                    <g filter="url(#filter1_d_1_175)">
                        <path
                            d="M50 96C50 68.3858 72.3858 46 100 46H886C913.614 46 936 68.3858 936 96V117.667C936 129.806 930.406 143.885 918.592 141.096C917.912 140.936 917.215 140.738 916.5 140.5C915.153 140.051 914.059 139.709 913.191 139.462C894.541 134.156 936 164.883 936 184.273V218C936 245.614 913.614 268 886 268H83.3051C64.9112 268 50 253.089 50 234.695C50 222.283 57.2933 211.439 67.3172 204.12C73.5764 199.55 75.7354 195.854 60 199C50.0255 200.994 50.0001 186.083 50 186C50 185.998 50 185.999 50 185.996V96Z"
                            fill="url(#paint0_radial_1_175)"/>
                    </g>
                    <path d="M71.998 198.5L750.998 203.601L57.498 213L70.998 201L71.998 198.5Z"
                          fill="url(#paint1_linear_1_175)" fillOpacity="0.1"/>
                    <path d="M907.998 139L225.998 144.601L915.998 151L910.498 144.5L907.998 139Z"
                          fill="url(#paint2_linear_1_175)" fillOpacity="0.1"/>
                </g>
                <defs>
                    <filter id="filter0_d_1_175" x="0" y="0" width="986" height="322" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="25"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_175"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_175" result="shape"/>
                    </filter>
                    <filter id="filter1_d_1_175" x="46" y="46" width="894" height="230" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_175"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_175" result="shape"/>
                    </filter>
                    <radialGradient id="paint0_radial_1_175" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(478.5 157) rotate(88.3422) scale(501.21 2000.32)">
                        <stop stopColor="#EDCE61"/>
                        <stop offset="0.855111" stopColor="#362673"/>
                    </radialGradient>
                    <linearGradient id="paint1_linear_1_175" x1="409.996" y1="210.997" x2="409.996" y2="197.986"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9F2F3F"/>
                        <stop offset="1" stopColor="#E05A2C"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1_175" x1="567" y1="151.997" x2="567" y2="138.986"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9F2F3F"/>
                        <stop offset="1" stopColor="#E05A2C"/>
                    </linearGradient>
                </defs>
            </svg>
        </StyledBoardBiscuit>
    )
}
