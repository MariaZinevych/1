import { ListFreinds } from './FriendList.styled';
import { Button } from './IconButton.styled';
import { LiaAndroid } from 'react-icons/lia';
export const FriendsList = ({ values }) => {
  return (
    <ListFreinds>
      {values.map(value => (
        <li key={value.id}>
          <span>
            <Button variant={value.isOnline}>
              <LiaAndroid />
            </Button>
          </span>
          <img src={value.avatar} alt="User avatar" width="48" />
          <p> {value.name} </p>
        </li>
      ))}
    </ListFreinds>
  );
};
