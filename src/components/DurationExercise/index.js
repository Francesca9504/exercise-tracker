import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600).toString().padStart(2, "0");
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${hours}:${mins}:${secs}`;
    };


    return (
        <div>
            <h2>{name}</h2>
            <p>Time: {formatTime(time)}</p>
            <button className="buttons" onClick={() => setIsRunning(true)}>Start</button>
            <button className="buttons" onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
        </div>
    );
}

export default DurationExercise;
