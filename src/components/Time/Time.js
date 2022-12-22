import React, { useEffect, useState } from 'react'
import s from "./Time.module.css";

export const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={s["time-container"]}>
            <h1>Время в Кемерово</h1>
            <p className={s.time}>{time}</p>
        </div>
    )
}
