import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  }
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  options = ['Good', 'Neutral', 'Bad'];
  onLeaveFeedback(e) {
    switch (e) {
      case 'Good':
        this.setState({ good: this.state.good + 1 });
        break;
      case 'Neutral':
        this.setState({ neutral: this.state.neutral + 1 });
        break;
      case 'Bad':
        this.setState({ bad: this.state.bad + 1 });
        break;
      default:
        return;
    }
  }
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
