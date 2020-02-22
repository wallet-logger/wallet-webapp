import React from 'react';

function DataboardTableEntry (props) {
  const { row : { name, position, office, age, startDate, salary } } = props;
  return (
      <React.Fragment>
        <tr>
          <td>{name}</td>
          <td>{position}</td>
          <td>{office}</td>
          <td>{age}</td>
          <td>{startDate}</td>
          <td>{salary}</td>
        </tr>
      </React.Fragment>
  );
};

export default DataboardTableEntry;