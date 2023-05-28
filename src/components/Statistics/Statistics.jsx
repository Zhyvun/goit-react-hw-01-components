import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList/StatisticsList';
import Title from './Title/Title';
import cl from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={cl.statistics}>
      {title && <Title title={title} />}
      <StatisticsList items={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
