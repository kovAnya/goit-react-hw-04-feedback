import { StatisticsList, StatItem, StatNumber } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticsList>
        <StatItem>
          Good:
          <StatNumber>{good}</StatNumber>
        </StatItem>
        <StatItem>
          Neutral:
          <StatNumber>{neutral}</StatNumber>
        </StatItem>
        <StatItem>
          Bad:
          <StatNumber>{bad}</StatNumber>
        </StatItem>
        <StatItem>
          Total:
          <StatNumber>{total}</StatNumber>
        </StatItem>
        <StatItem>
          Positive feedback:
          <StatNumber>{positivePercentage}%</StatNumber>
        </StatItem>
      </StatisticsList>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
