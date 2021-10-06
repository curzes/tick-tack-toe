import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App(): JSX.Element {

  const [turn, setTurn] = useState(true);
  const [cells, setCells] = useState<null[] | string[]>([null, null, null, null, null, null, null, null, null]);
  const [done, setDone] = useState(false);
  const [doneString, setDoneString] = useState('');

  function changeTurn(index: number): void {
    if (cells[index] === null && !done) {
      var tmpCells = cells.slice();
      if (turn) {
        tmpCells[index] = 'X';
      } else {
        tmpCells[index] = '0';
      }
      setCells(tmpCells);
      var cellCheck = checkResult(tmpCells);
      if (cellCheck) {
        setDone(true);
        if (typeof (cellCheck) === 'string') {
          setDoneString(cellCheck);
        }
      } else {
        setTurn(!turn);
      }
    }
  }

  function checkResult(tmpCells: null[] | string[]): string | boolean {
    if (checkValidResult(tmpCells[0], tmpCells[1], tmpCells[2])) { return 'done-1'; }
    if (checkValidResult(tmpCells[3], tmpCells[4], tmpCells[5])) { return 'done-2'; }
    if (checkValidResult(tmpCells[6], tmpCells[7], tmpCells[8])) { return 'done-3'; }

    if (checkValidResult(tmpCells[0], tmpCells[3], tmpCells[6])) { return 'done-4'; }
    if (checkValidResult(tmpCells[1], tmpCells[4], tmpCells[7])) { return 'done-5'; }
    if (checkValidResult(tmpCells[2], tmpCells[5], tmpCells[8])) { return 'done-6'; }

    if (checkValidResult(tmpCells[0], tmpCells[4], tmpCells[8])) { return 'done-7'; }
    if (checkValidResult(tmpCells[2], tmpCells[4], tmpCells[6])) { return 'done-8'; }
    return false;
  }

  function checkValidResult(first: string | null, second: string | null, third: string | null) {
    if (first === second && second === third) {
      return first;
    }
    return false;
  }

  return (
    <div className="App">
      <Board doneString={doneString} cells={cells} changeTurn={changeTurn} turn={turn} />
    </div>
  );
}

export default App;
