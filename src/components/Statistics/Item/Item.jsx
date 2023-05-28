import PropTypes from 'prop-types';
import { Fragment } from 'react';
import cl from './Item.module.css';

const Item = ({ label, percentage }) => {
  return (
    <Fragment>
      <span className={cl.label}>{label}</span>
      <span className={cl.percentage}>{percentage}%</span>
    </Fragment>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Item;
