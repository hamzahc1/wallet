import React from 'react';
import {Table} from 'react-bootstrap';

import AccountItem from './AccountItem';

export default class AccountHistory extends React.Component {
  render () {
    let {history, balance} = this.props
    let allHistory = history.map((item, i) => {
      return (
      <AccountItem key={i} amount = {item.amount} date = {item.date} />
      )
    })

    return (
      <div>
      <Table bordered striped>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Date & Time</th>
          </tr>
        </thead>

        <tbody>
        {allHistory} 
        </tbody>
      </Table>
      <h2>Balance: {Number(balance).toLocaleString('gb-GB', { style: 'currency', currency: 'GBP' })}</h2>
      </div>
      )
  }
}