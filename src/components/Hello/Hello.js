import React, { useRef, useState } from 'react'
import s from "./Hello.module.css";


export const Hello = () => {
    const [title, setTitle] = useState("Hello");
    const textRef = useRef();

    const updateTitle = () => {
        setTitle(title => title + textRef.current.value);
    }

    return (
        <div className={s["hello-container"]}>
            <h1 className={s.title}>{title}</h1>
            <input ref={textRef} className={s["input"]} type="text" placeholder="What's your name?" />
            <button onClick={updateTitle} className={s["button"]}>Submit</button>
        </div>
    )
}
