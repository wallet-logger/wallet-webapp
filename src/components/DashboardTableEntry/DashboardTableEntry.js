import React, { useState, useEffect }  from 'react';
import { logo_amex_platinum } from '../../utils/imageResource'

function DataboardTableEntry (props) {
  const { row : { time_created, account, category, contents, amount, type } } = props;

  const [cardSrc, setCardSrc] = useState("");

  useEffect(() => {
    if(account === 'AMEX') {
      setCardSrc(logo_amex_platinum)
    }
  }, [account]);

  return (
      <React.Fragment>
        <tr>
          <td>{time_created}</td>
          <td>{cardSrc ? <img src={cardSrc} alt="card" style={{height: 30}}/> : "" }</td>
          <td>{category}</td>
          <td>{contents}</td>
          <td>{amount}</td>
          <td>{type ? "Expense" : "Income"}</td>
        </tr>
      </React.Fragment>
  );
}

export default DataboardTableEntry;