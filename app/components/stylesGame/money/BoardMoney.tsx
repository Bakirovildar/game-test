import {StyledBoardBiscuit} from "../../../../styles/styledGamePage"
import {MoneyIcon1} from "../../icons/randomIcons/moneyIcons/MoneyIcon1";
import {IBoard} from "../flowers/BoardFlowers";
import {useEffect, useState} from "react";

export const BoardMoney = ({isAscending, countIcon}: IBoard) => {
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
                <div className='board'>
                    {
                        isAscending &&  <div><MoneyIcon1/></div>
                    }

                    {
                        icons.map(() => <div className='circle'/>)
                    }
                    {
                        !isAscending &&  <div><MoneyIcon1/></div>
                    }
                </div>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="894" height="230" viewBox="0 0 894 230" fill="none">
                <g filter="url(#filter0_d_1_991)">
                    <path
                        d="M4 50C4 22.3858 26.3858 0 54 0H840C867.614 0 890 22.3858 890 50V81.8235C890 85.2653 889.645 88.6979 888.94 92.0667L887.31 99.8538C886.121 105.531 886.346 111.413 887.963 116.983C889.307 121.612 889.692 126.467 889.094 131.25L886.6 151.198C885.872 157.021 886.175 162.926 887.495 168.643L889.023 175.266C889.672 178.08 890 180.958 890 183.845C890 204.918 872.918 222 851.845 222H54C26.3857 222 4 199.614 4 172V163L6.77598 114.42C6.9251 111.811 6.86936 109.194 6.60927 106.593L4 80.5V50Z"
                        fill="url(#paint0_radial_1_991)"/>
                </g>
                <path d="M882.5 158.5L172 157.925L886.5 164.5V157L882.5 158.5Z" fill="#583D18" fillOpacity="0.3"/>
                <path d="M7.5 91.5H857L6 106V97.5L7.5 91.5Z" fill="#5A3C0F" fillOpacity="0.3"/>
                <defs>
                    <filter id="filter0_d_1_991" x="0" y="0" width="894" height="230" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_991"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_991" result="shape"/>
                    </filter>
                    <filter id="filter1_i_1_991" x="439.03" y="45" width="131" height="135" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="12.5"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_991"/>
                    </filter>
                    <filter id="filter2_i_1_991" x="169.03" y="45" width="131" height="135" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="12.5"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_991"/>
                    </filter>
                    <filter id="filter3_i_1_991" x="574.04" y="45" width="131" height="135" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="12.5"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_991"/>
                    </filter>
                    <filter id="filter4_i_1_991" x="304.04" y="45" width="131" height="135" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="12.5"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_991"/>
                    </filter>
                    <filter id="filter5_i_1_991" x="709.04" y="45" width="131" height="135" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="12.5"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_991"/>
                    </filter>
                    <radialGradient id="paint0_radial_1_991" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(447 120.5) rotate(88.5962) scale(530.659 2117.86)">
                        <stop stopColor="#5E3E0D"/>
                        <stop offset="1" stopColor="#C09F9B"/>
                    </radialGradient>
                    <linearGradient id="paint1_linear_1_991" x1="52.1842" y1="156.814" x2="144.811" y2="64.1848"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBC01E"/>
                        <stop offset="0.4609" stopColor="#FDC822"/>
                        <stop offset="1" stopColor="#FCE13C"/>
                    </linearGradient>
                </defs>
            </svg>
        </StyledBoardBiscuit>
    )
}
