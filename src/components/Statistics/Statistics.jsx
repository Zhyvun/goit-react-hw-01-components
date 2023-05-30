import PropTypes from 'prop-types';
import { getRandomHexColor } from 'functions';
import cl from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={cl.statistics}>
      {title && <h2 className={cl.title}>{title}</h2>}
      <ul className={cl.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={cl.item}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <>
              <span Label={cl.label}>{label}</span>
              <span percentage={cl.percentage}>{percentage}%</span>
            </>
          </li>
        ))}
      </ul>
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
