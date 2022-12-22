import React from 'react'
import pi, { doublePi, triplePi } from '../math'

export const MathView = () => {
    return (
        <div>
            <h1>Модули</h1>
            <ul>
                <li>{pi}</li>
                <li>{doublePi()}</li>
                <li>{triplePi()}</li>
            </ul>
        </div>

    )
}
