import { useState} from 'react';
import InfoBox from './components/InfoBox';
import QuizBox from './components/QuizBox';
import ResultBox from './components/ResultBox';
import {db} from "./data/db"
// const fetchQuestions = async () => {
//   const response = await fetch('./data/db.json'); // Change to the public directory
//   if (!response.ok) {
//     throw new Error('Failed to fetch questions');
//   }
//   const data = await response.json();
//   return data;
// };

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [rightAnswer, setRightAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = db.questions
  // const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   // Define the async function within useEffect
  //   const loadQuestions = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/questions'); // Change to the public directory
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch questions');
  //       }
  //       const data = await response.json();
  //       // console.log(data);
  //       setQuestions(data); // Set the fetched questions into the state
  //     } catch (error) {
  //       console.error('Error fetching questions:', error);
  //     }
  //   };

  //   loadQuestions(); // Call the async function inside useEffect
  // }, []); // Empty dependency array ensures it runs once

  const startQuiz = () => {
    setShowInfo(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) =>
      prevQuestion < questions.length - 1 ? prevQuestion + 1 : prevQuestion
    );

    if (currentQuestion === questions.length - 1) {
      setShowQuiz(false);
      setShowResult(true);
    }
  };

  const handleAnswerSelection = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].answer;

    setScore((prevScore) =>
      selectedOption === correctAnswer ? prevScore + 1 : prevScore
    );
    setRightAnswer(correctAnswer);
  };

  const opQuiz = (input) => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setShowQuiz(input === 'r');
  };

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      {!showInfo && !showQuiz && !showResult && (
        <div className="start_btn">
          <button 
            onClick={startQuiz} 
            className="text-blue-500 font-medium text-2xl py-3 px-8 bg-white rounded shadow-lg hover:bg-blue-100"
          >
            Start Quiz
          </button>
        </div>
      )}

      {showInfo && <InfoBox setShowQuiz={setShowQuiz} setShowInfo={setShowInfo} />}
      {showQuiz && questions.length > 0 && (
        <QuizBox 
          question={questions[currentQuestion]} 
          currentQuestion={currentQuestion} 
          totalQuestions={questions.length} 
          handleAnswerSelection={handleAnswerSelection} 
          handleNextQuestion={handleNextQuestion}
          rightAnswer={rightAnswer}
        />
      )}
      {showResult && (
        <ResultBox 
          score={score} 
          totalQuestions={questions.length} 
          opQuiz={opQuiz} 
          setShowResult={setShowResult}  
        />
      )}
    </div>
  );
}

export default App;
