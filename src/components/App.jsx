// import { Component } from 'react';
import { useState } from 'react';
import FeedbackOptions from './Feedbackoptions/Feedbackoptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  // initState = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (sumGood, total) => {
    if (total) return Math.floor((sumGood / total) * 100);
    return;
  };

  const incrementFeedBack = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'reset':
        setGood(0);
        setNeutral(0);
        setBad(0);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1 style={{ visibility: 'hidden' }}>Feedback statistics</h1>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={incrementFeedBack} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            result={{ good, bad, neutral }}
            total={countTotalFeedback}
            percent={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </>
  );
};

export default App;
