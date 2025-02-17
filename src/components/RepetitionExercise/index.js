import React, { useState } from "react";

function RepetitionExercise({ name }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{name}</h2>
            <p>Repetitions: {count}</p>
            <button className="buttons" onClick={() => setCount(count + 1)}>Increase</button>
            <button className="buttons" onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default RepetitionExercise;