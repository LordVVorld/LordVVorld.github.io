import React, { useState } from 'react';
import s from "./Hooks.module.css";

export const Hooks = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const decrement = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div className={s["hooks-container"]}>
            <p className={s.counter}>{number}</p>
            <div>
                <button onClick={increment} className={s.button}>+</button>
                <button onClick={decrement} className={s.button}>-</button>
            </div>
        </div>
    )
}