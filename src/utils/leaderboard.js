// src/utils/leaderboard.js
export const saveScore = (score) => {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push(score);
    localStorage.setItem('scores', JSON.stringify(scores));
  };
  
  export const getHighScores = () => {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    return scores.sort((a, b) => b - a).slice(0, 10); // Top 10 scores
  };