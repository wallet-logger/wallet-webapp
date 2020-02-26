import React from 'react';

function DataboardTableEntry (props) {
  const { row : { date, account, category, item, amount, type } } = props;
  return (
      <React.Fragment>
        <tr>
          <td>{date}</td>
          <td>{account}</td>
          <td>{category}</td>
          <td>{item}</td>
          <td>{amount}</td>
          <td>{type ? "Expense" : "Income"}</td>
        </tr>
      </React.Fragment>
  );
};

export default DataboardTableEntry;