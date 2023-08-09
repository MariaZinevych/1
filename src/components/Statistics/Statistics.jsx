import { StatList } from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatList>
      <h2>Upload stats</h2>

      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <span> {stat.label} </span>
            <span> {stat.percentage} % </span>
          </li>
        ))}
      </ul>
    </StatList>
  );
};
