import PropTypes from 'prop-types';

function ResultBox({ score, totalQuestions,opQuiz }) {
  return (
    <div className="result_box bg-white p-6 rounded shadow-lg w-80">
      <div className="icon text-blue-500 text-6xl mb-4">
        <i className="fas fa-crown"></i>
      </div>
      <div className="complete_text text-lg font-semibold">You&apos;ve completed the Quiz!</div>
      <div className="score_text text-sm mt-4">
        You scored {score} out of {totalQuestions}.
      </div>
      <div className="buttons mt-6 flex justify-center">
        <button onClick={() => opQuiz("r")} className="restart bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
          Replay Quiz
        </button>
        <button onClick={() => opQuiz("q")}  className="quit text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-100">
          Quit Quiz
        </button>
      </div>
    </div>
  );
}

ResultBox.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  opQuiz: PropTypes.func.isRequired,
};

export default ResultBox;
