import React from 'react';

const PlayAgain = (props) => (
  <>
    {props.gameStatus !== 'active' &&
      <div
        className="messageStatus"
        style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
      >
        {props.gameStatus === 'lost' ? 'You lost - Game Over' : 'You win - Nice'}
        <button onClick={props.onClick}>Play Again</button>
      </div>
    }
  </>
);

export default PlayAgain;
