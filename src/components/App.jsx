import { Profiles } from './Profile/Profile';
import user from '../user.json';
import { GlobalStyle } from 'GlobalStyle';
import data from '../data.json';
import friends from '../friends.json';
import transaction from '../transactions.json';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { Transaction } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profiles
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList values={friends} />
      <Transaction datas={transaction} />

      <GlobalStyle />
    </div>
  );
};
