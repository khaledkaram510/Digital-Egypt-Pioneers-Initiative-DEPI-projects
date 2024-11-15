
import PropTypes from 'prop-types';

function InfoBox({ setShowQuiz, setShowInfo }) {
  const continueQuiz = () => {
    setShowQuiz(true);
    setShowInfo(false);
  };

  return (
    <div className="info_box bg-white p-6 rounded shadow-lg sm:w-full md:w-1/2 w-full">
      <div className="info-title text-xl font-semibold">Some Rules of this Quiz</div>
      <div className="info-list mt-4">
        <div className="info mb-2">1. You will have only <span className="font-semibold text-blue-500">15 seconds</span> per each question.</div>
        <div className="info mb-2">2. Once you select your answer, it can&apos;t be undone.</div>
        <div className="info mb-2">3. You can&apos;t select any option once time goes off.</div>
        <div className="info mb-2">4. You can&apos;t exit the Quiz while you&apos;re playing.</div>
        <div className="info">5. You&apos;ll get points based on your correct answers.</div>
      </div>
      <div className="buttons flex justify-end mt-4">
        <button 
          onClick={() => setShowInfo(false)} 
          className="quit px-4 py-2 text-blue-500 border border-blue-500 rounded mr-2 hover:bg-blue-100"
        >
          Exit Quiz
        </button>
        <button 
          onClick={continueQuiz} 
          className="restart px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

InfoBox.propTypes = {
  setShowQuiz: PropTypes.func.isRequired,
  setShowInfo: PropTypes.func.isRequired,
};

export default InfoBox;
