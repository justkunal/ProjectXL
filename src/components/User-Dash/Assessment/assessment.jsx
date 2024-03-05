import React, { useState } from "react";
import "./assessment.css";
import Flag from "../images/flag.png";
import { Link } from "react-router-dom";

const Assessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [ready, setReady] = useState(false);

  const questions = [
    {
      question: "1. My sleep is disturbed",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "2. I Do Not Wake Up Feeling Rested",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "3. I Can't Remember Things",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "4. My Hands Tremble",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "5. I experience sudden chest pains or rapid heartbeat",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "6.  I feel like I cannot breathe or am breathing too fast",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "7. I avoid certain places, activities or situations",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    // Add more questions here
  ];

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleReady = () => {
    setReady(true);
    setCurrentQuestionIndex(0);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Submit answers to backend or perform any other action
  };

  return (
    <div>
      {!ready && (
        <div className="assessment-first">
          <p>Are you ready to begin the Assessment ?</p>
          <button onClick={handleReady}>Yes</button>
        </div>
      )}
      {ready && currentQuestionIndex !== -1 && (
        <div className="assess-question">
          <h3>{questions[currentQuestionIndex].question}</h3>
          {questions[currentQuestionIndex].options.map(
            (option, optionIndex) => (
              <div className="option-ass" key={optionIndex}>
                <input
                  type="radio"
                  id={`question-${currentQuestionIndex}-option-${optionIndex}`}
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  onChange={() => handleAnswer(optionIndex)}
                />
                <label
                  htmlFor={`question-${currentQuestionIndex}-option-${optionIndex}`}
                >
                  {option}
                </label>
              </div>
            )
          )}
          <div className="next-sub">
            <button onClick={handleNext}>Next</button>
            {currentQuestionIndex === questions.length - 1 && (
              <button onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </div>
      )}
      {submitted && (
        <div className="pop-black">
          <div className="submitted-pop">
            <img className="flag-img" src={Flag}></img>
            <div>Your response is successfully noted.</div>
            <div>
              <Link to="/profile-self-assessment">
                <div>Repeat Assessment</div>
              </Link>
              <Link to="/home">
                <div>Explore More</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assessment;
