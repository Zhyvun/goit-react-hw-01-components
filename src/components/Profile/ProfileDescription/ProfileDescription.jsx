import PropTypes from 'prop-types';
import cl from './ProfileDescription.module.css';

const ProfileDescription = ({ username, tag, location, avatar }) => {
  return (
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
    </div>
  );
};

ProfileDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfileDescription;
