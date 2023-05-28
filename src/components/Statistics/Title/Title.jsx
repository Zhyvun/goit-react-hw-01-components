import PropTypes from 'prop-types';
import cl from './Title.module.css';

const Title = ({ title }) => {
  return <h2 className={cl.title}>{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
