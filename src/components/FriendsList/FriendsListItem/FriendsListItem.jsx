import PropTypes from 'prop-types';
import cl from './FriendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={cl.item}>
      <span className={isOnline ? cl.statusOnline : cl.statusOffline} />
      <img className={cl.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={cl.friendName}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
