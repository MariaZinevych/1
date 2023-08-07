import { Profiles } from './Profile/Profile';
import user from '../user.json';
import { GlobalStyle } from 'GlobalStyle';
import data from '../data.json';
import { Statistics } from './Statistics/Statistics';

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

      <GlobalStyle />
    </div>
  );
};
