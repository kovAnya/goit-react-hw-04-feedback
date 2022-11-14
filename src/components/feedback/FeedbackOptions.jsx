import { BtnList, FeedbackBtn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Please, leave feedback</h2>
      <BtnList>
        {options.map(option => (
          <FeedbackBtn
            key={option}
            name={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option.toUpperCase()}
          </FeedbackBtn>
        ))}
      </BtnList>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
