import PropTypes from 'prop-types';
import cl from './ProfileStats.module.css';

const ProfileStats = ({ stats }) => {
  return (
    <ul className={cl.stats}>
      <li>
        <span className={cl.label}>Followers</span>
        <span className={cl.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={cl.label}>Views</span>
        <span className={cl.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={cl.label}>Likes</span>
        <span className={cl.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

ProfileStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProfileStats;
