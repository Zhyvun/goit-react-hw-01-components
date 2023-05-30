import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem/FriendsListItem';
import cl from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={cl['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
