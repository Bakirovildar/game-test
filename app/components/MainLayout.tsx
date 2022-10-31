import React, {ReactNode} from "react";

interface IMainLayout {
    children: ReactNode
    valueSettings?: any
}

export default function MainLayout({children, valueSettings}: IMainLayout) {

    return (
        <>
            {children}
        </>
    )
}
