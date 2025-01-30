// src/components/ProgressBar.js
const ProgressBar = ({ progress }) => {
    return (
      <div style={{ width: '100%', backgroundColor: '#ddd' }}>
        <div style={{ width: `${progress}%`, backgroundColor: 'green', height: '10px' }}></div>
      </div>
    );
  };
  
  export default ProgressBar;