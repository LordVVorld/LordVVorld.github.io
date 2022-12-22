import React from 'react'


export const Greetings = () => {

    const getСurrentGreeting = () => {
        let date = new Date();
        const currentHour = date.getHours();
        if (currentHour <= 6) {
            return "Good Night";
        } else if (currentHour <= 12) {
            return "Good Morning";
        } else {
            return "Good Afternoon";
        }
    }


    return (
        <div>
            <h1>{getСurrentGreeting()}</h1>
        </div>
    )
}
