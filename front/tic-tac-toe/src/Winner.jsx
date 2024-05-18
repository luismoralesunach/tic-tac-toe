import { useState } from "react";


const Winner = (props) => {
    const { playerInfo } = props;
   


    // Define the checkWinner function outside of the JSX
    const checkWinner = () => {
        if (playerInfo[0].text === 'X' && playerInfo[1].text === 'X' && playerInfo[2].text === 'X') {
            console.log("Player X wins");
            return <h1>Player X wins!</h1>;
        }
        // You should handle other win conditions similarly
    };

    return (
        <div>
            {/* Call the checkWinner function */}
            {checkWinner()}
        </div>
    );
};

export default Winner;
