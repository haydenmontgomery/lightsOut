import React from 'react';
import Board from "./Board";
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Board nrows={3} ncols={3}/>
      </div>
    </>
  );
}

export default App;
