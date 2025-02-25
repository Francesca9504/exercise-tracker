import React, { useState } from 'react';

const StepCountExercise = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        setSteps(steps + 50);  // Change from 100 to 50
    };

    const resetSteps = () => {
        setSteps(0);
    };

    return (
        <div>
            <h2>Step Count Exercise</h2>
            <p>Steps Taken: {steps}</p>
            <button onClick={increaseSteps}>Add 50 Steps</button>
            <button onClick={resetSteps}>Reset</button>
        </div>
    );
};

export default StepCountExercise;