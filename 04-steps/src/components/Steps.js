import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Work hard, Play hard 🍾",
];

function Steps() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step <= 1) return;
    setStep(step - 1);
  }

  function handleNext() {
    if (step >= messages.length) return;
    setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
        <div className={step >= 4 ? "active" : ""}>4</div>
      </div>
      <div className="message">
        Step {step}: {messages[step - 1]}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Steps;
