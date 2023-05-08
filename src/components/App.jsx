import React, { Component } from 'react';
import Controls from './Controls/Controls';
import Statistics from './Statistics/Statistics';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  options = Object.keys(this.state);

  handleButton = options => {
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));
  };

  // countTotalFeedback = () => {
  //   const total = this.state.good + this.state.neutral + this.state.bad;

  //   return total;
  // };

  //перебираємо значення стейту та знаходимо суму
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;

    for (const value of values) {
      total += value;
    }

    return total;
  };
  //знаходимо відсоток хороших відгуків
  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const total = this.countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    return Math.round((good / total) * 100);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <Controls onButtonClick={this.handleButton} option={this.options} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
export default App;
