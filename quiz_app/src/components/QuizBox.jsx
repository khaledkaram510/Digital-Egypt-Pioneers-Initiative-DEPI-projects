import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function QuizBox({
  question,
  currentQuestion,
  totalQuestions,
  handleAnswerSelection,
  handleNextQuestion,
  rightAnswer,
}) {
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      handleOptionClick("");
    }

    return () => clearInterval(timer); // Clear interval on component unmount or when time runs out
  }, [timeLeft, handleNextQuestion]);

  const handleOptionClick = (option) => {
    handleAnswerSelection(option);
    setAnswered(true);
    setSelectedOption(option);
  };

  return (
    <div className="quiz_box bg-white p-6 rounded shadow-lg w-1/2">
      <header className="flex justify-between items-center bg-gray-100 py-4 px-6 rounded-t">
        <div className="title font-semibold text-xl">Quiz Application</div>
        <div className="timer flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded">
          <div className="time_left_txt mr-2">Time Left</div>
          <div className="timer_sec bg-gray-800 text-white px-4 py-2 rounded">
            {timeLeft}
          </div>
        </div>
      </header>
      <section className="py-4">
        <div className="que_text text-lg font-semibold mb-4">
          {currentQuestion + 1}. {question.question}
        </div>
        <div className="option_list space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full text-left py-2 px-4 bg-gray-100 flex justify-between ${
                !answered && "hover:bg-blue-100"
              } ${
                selectedOption === option && selectedOption === rightAnswer
                  ? "border-2 border-green-500 text-green-500"
                  : selectedOption === option
                  ? "border-2 border-red-500 text-red-500"
                  : ""
              } ${
                option === rightAnswer && "border-2 border-green-500 text-green-500"
              } rounded`}
              disabled={answered}
            >
              {option}
              <svg
                className={`w-6 h-6 text-gray-800 dark:text-white hidden ${
                  selectedOption === option && selectedOption === rightAnswer
                    ? " text-green-500 !block"
                    : selectedOption === option
                    ? " text-red-500 !block"
                    : ""
                } ${option === rightAnswer && " text-green-500 !block"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          ))}
        </div>
      </section>
      <footer className="flex justify-between items-center border-t p-4">
        <div className="total_que">
          {currentQuestion + 1} of {totalQuestions} Questions
        </div>
        <button
          className={`next_btn bg-blue-500 text-white px-4 py-2 rounded ${answered? "hover:bg-blue-600" : "cursor-not-allowed"}`}
          onClick={() => {
            handleNextQuestion();
            setAnswered(false);
            setTimeLeft(15); // Reset timer
          }}
          disabled={!answered}
        >
          Next
        </button>
      </footer>
    </div>
  );
}

QuizBox.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  currentQuestion: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  handleAnswerSelection: PropTypes.func.isRequired,
  handleNextQuestion: PropTypes.func.isRequired,
  rightAnswer: PropTypes.string.isRequired,
};

export default QuizBox;
