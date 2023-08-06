import { Profile, List } from './Profile.styled';

export const Profiles = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <Profile>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          width={50}
        />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </Profile>

      <List>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </List>
    </div>
  );
};
