import "./Game.css";

import React, { Component, Fragment } from "react";

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      next: "X",
    };
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(this.state.squares) || squares[i] != null) {
      return;
    }
    squares[i] = this.state.next === "X" ? "X" : "O";
    this.setState({
      squares: squares,
      next: this.state.next === "X" ? "O" : "X",
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      ></Square>
    );
  }

  render() {
    let winner = this.calculateWinner(this.state.squares);
    let gameStatus;
    if (winner) {
      gameStatus = `Winner: ${winner}`;
    } else {
      gameStatus = `Next player: ${this.state.next}`;
    }
    return (
      <Fragment>
        <div className="status mb-2 text-center">{gameStatus}</div>
        <table class="table table-bordered">
          <tbody>
            <tr className="board-row">
              <td>{this.renderSquare(0)}</td>
              <td>{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
            </tr>
            <tr className="board-row">
              <td>{this.renderSquare(3)}</td>
              <td>{this.renderSquare(4)}</td>
              <td>{this.renderSquare(5)}</td>
            </tr>
            <tr className="board-row">
              <td>{this.renderSquare(6)}</td>
              <td>{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
