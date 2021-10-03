import React, { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {};

  render() {
    return (
      <div>
        <h2>PLease leave feedback</h2>
        <button type="button" name="good" onClick={this.handleClick}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleClick}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleClick}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good:</li>
          <li>Neutral:</li>
          <li>Bad:</li>
        </ul>
      </div>
    );
  }
}

export default App;
