import React, { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    const stateValue = e.currentTarget.name;

    this.setState((prevState) => {
      return { [stateValue]: prevState[stateValue] + 1 };
    });
  };

  countTotalFeedbackAmount = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (!good) {
      return 0;
    }
    return Math.round((good / this.countTotalFeedbackAmount()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
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
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedbackAmount()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()} %</li>
        </ul>
      </div>
    );
  }
}

export default App;
