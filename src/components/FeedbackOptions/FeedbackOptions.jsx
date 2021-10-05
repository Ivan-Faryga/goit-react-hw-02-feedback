import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <button
      key={option}
      type="button"
      name={option}
      onClick={onLeaveFeedback}
      className={s.btn}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.proptypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
