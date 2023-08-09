import { ListFreinds } from './FriendList.styled';
export const FriendsList = ({ values }) => {
  return (
    <ListFreinds>
      {values.map(value => (
        <li key={value.id}>
          <span> {value.isOnline} </span>
          <img src={value.avatar} alt="User avatar" width="48" />
          <p> {value.name} </p>
        </li>
      ))}
    </ListFreinds>
  );
};
