import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackContainer}>
      {options.map(option => {
        return (
          <button
            className={css.feedbackBtn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;
