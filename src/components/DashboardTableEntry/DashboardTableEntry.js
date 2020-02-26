import React from 'react';

function DataboardTableEntry (props) {
  const { row : { time_created, account, category, contents, amount, type } } = props;
  return (
      <React.Fragment>
        <tr>
          <td>{time_created}</td>
          <td>{account}</td>
          <td>{category}</td>
          <td>{contents}</td>
          <td>{amount}</td>
          <td>{type ? "Expense" : "Income"}</td>
        </tr>
      </React.Fragment>
  );
}

export default DataboardTableEntry;