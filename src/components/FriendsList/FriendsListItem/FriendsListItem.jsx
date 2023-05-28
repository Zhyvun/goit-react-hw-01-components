import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOffline} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
