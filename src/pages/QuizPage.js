// src/pages/QuizPage.js
import { useEffect, useState } from 'react';
import { fetchQuizData } from '../utils/api';

const QuizPage = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const data = await fetchQuizData();
        setQuizData(data);
      } catch (err) {
        setError('Failed to load quiz data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadQuizData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {/* Render quiz questions */}
    </div>
  );
};

export default QuizPage;