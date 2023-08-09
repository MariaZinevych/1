export const Transaction = ({ datas }) => {
  return (
    <ul>
      {datas.map(data => (
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{data.type}</td>
              <td>{data.amount}</td>
              <td>{data.currency}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </ul>
  );
};
