import React from 'react';
import Board from "./Board";
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Board nrows={5} ncols={5}/>
      </div>
    </>
  );
}

export default App;
