import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

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
            {capitalizeFirstLetter(option)}
          </button>
        );
      })}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
