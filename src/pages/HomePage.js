// src/pages/HomePage.js
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <button onClick={() => navigate('/quiz')}>Start Quiz</button>
    </div>
  );
};

export default HomePage;