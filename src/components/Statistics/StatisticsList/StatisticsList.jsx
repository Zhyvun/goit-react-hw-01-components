import PropTypes from 'prop-types';
import Item from '../Item/Item';
import { getRandomHexColor } from 'functions';
import cl from './StatisticsList.module.css';

const StatisticsList = ({ items }) => {
  return (
    <ul className={cl.statList}>
      {items.map(({ id, label, percentage }) => (
        <li
          className={cl.item}
          key={id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <Item label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StatisticsList;
