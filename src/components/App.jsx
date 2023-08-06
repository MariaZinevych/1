import { Profiles } from './Profile/Profile';
import user from '../user.json';
import { GlobalStyle } from 'GlobalStyle';

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
      <GlobalStyle />
    </div>
  );
};
