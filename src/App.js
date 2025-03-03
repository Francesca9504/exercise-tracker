import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import StepCountExercise from "./components/StepCountExercise";

import "./App.css";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push-ups", type: "repetition" },
    { name: "Jumping Jacks", type: "duration" },
    { name: "Squats", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Step Count", type: "step" }
  ];

  return (
    <div className="button-container">
      {!selectedExercise ? (
        <div>
          <h1 className="header">Exercise Tracker</h1>
          {exercises.map((exercise) => (
            <button
              className="exercise-button"
              key={exercise.name}
              onClick={() => setSelectedExercise(exercise)}
            >
              {exercise.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button className="exercise-button" onClick={() => setSelectedExercise(null)}>
            Back to Menu
          </button>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : selectedExercise.type === "duration" ? (
            <DurationExercise name={selectedExercise.name} />
          ) : selectedExercise.type === "step" ? (
            <StepCountExercise />
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;