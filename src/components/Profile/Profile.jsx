import PropTypes from 'prop-types';
import cl from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={cl.profile}>
      <div className={cl.description}>
        <img
          src={avatar}
          width="260"
          height="210"
          alt="User avatar"
          className={cl.avatar}
        />
        <p className={cl.name}>{username}</p>
        <p className={cl.tag}>@{tag}</p>
        <p className={cl.location}>{location}</p>

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
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
