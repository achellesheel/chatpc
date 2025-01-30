// src/pages/ResultsPage.js
const ResultsPage = ({ score, totalQuestions }) => {
    return (
      <div>
        <h1>Quiz Completed!</h1>
        <p>You scored {score} out of {totalQuestions}.</p>
      </div>
    );
  };
  
  export default ResultsPage;