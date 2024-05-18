import { useState,useEffect } from 'react'
import './App.css'

function App() {
  
  const [ xTurn, setXTurn] = useState(true)
  const [winner, setWinner] = useState(false)
  const [playerInfo, setPlayerInfo] = useState([
    {player: 1, text: "", clicked: false},
    {player: 2, text: "", clicked: false},
    {player: 3, text: "", clicked: false},
    {player: 4, text: "", clicked: false},
    {player: 5, text: "", clicked: false},
    {player: 6, text: "", clicked: false},
    {player: 7, text: "", clicked: false},
    {player: 8, text: "", clicked: false},
    {player: 9, text: "", clicked: false},
  ])

  const playerTurn = (player) => {
    if (!player.clicked) {
      const updatedPlayerInfo = playerInfo.map((p) =>
        p.player === player.player ? { ...p, text: xTurn ? 'X' : 'O', clicked: true } : p
      );
      setPlayerInfo(updatedPlayerInfo);
      setXTurn(!xTurn);
    }
  };

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (playerInfo[a].text && playerInfo[a].text === playerInfo[b].text && playerInfo[a].text === playerInfo[c].text) {
        setWinner(playerInfo[a].text);
        return playerInfo[a].text;
      }
    }
    if (playerInfo.every(player => player.clicked)) {
      setWinner('draw');
      return 'draw';
    }

    return null;
  };

  useEffect(() => {
    checkWinner();
  }, [playerInfo]);

 
  


  return (
    <>
    {winner && (
        <h1>
          {winner === 'draw' ? 'It\'s a draw!' : `Player ${winner} wins!`}
        </h1>
      )}
    
    <div className='grid'>

 
      {playerInfo.map((player)=>(
      <button  
        key={player.player}
        onClick={()=>playerTurn(player)}
        disabled = {player.clicked || winner}
        >
          <p>{player.text}</p>
          </button>
          ))}
      </div>
      
    </>
  )
}

export default App
