import { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // Use an object to store colors for each button
  const [buttonColors, setButtonColors] = useState({
    1: 'black',
    2: 'black',
    3: 'black',
    4: 'black',
    5: 'black',
    6: 'black',
    7: 'black',
    8: 'black',
    9: 'black',
  });


  const changeButtonColor = (buttonNumber) => {
    setButtonColors((prevColors) => ({
      ...prevColors,
      [buttonNumber]: 'green', 
    }));
  };

  return (
    <>
      <div className='grid'>
        {/* Map through the score array and render buttons */}
        {score.map((buttonNumber) => (
          <button
            key={buttonNumber}
            style={{ backgroundColor: buttonColors[buttonNumber] }} // Set button color dynamically
            onClick={() => changeButtonColor(buttonNumber)} // Handle color change on button click
          >
            {buttonNumber}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
