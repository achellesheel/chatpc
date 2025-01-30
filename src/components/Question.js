// src/components/Question.js
const Question = ({ question, options, onAnswerSelect }) => {
    return (
      <div>
        <h3>{question}</h3>
        {options.map((option, index) => (
          <button key={index} onClick={() => onAnswerSelect(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };
  
  export default Question;