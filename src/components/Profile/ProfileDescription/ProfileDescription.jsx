import PropTypes from 'prop-types';
import css from './ProfileDescription.module.css';

const ProfileDescription = ({ username, tag, location, avatar }) => {
  return (
    <div className={css.description}>
      <img
        src={avatar}
        width="260"
        height="210"
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
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
