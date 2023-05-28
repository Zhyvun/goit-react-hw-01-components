import PropTypes from 'prop-types';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import ProfileStats from './ProfileStats/ProfileStats';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats stats={stats} />
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
