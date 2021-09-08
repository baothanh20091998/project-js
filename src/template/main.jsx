import React from 'react'
import Header from '../header/header'

export default function MainTempate(props) {
    const { children } = props
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
