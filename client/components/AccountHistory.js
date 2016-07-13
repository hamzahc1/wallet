import React from 'react';
import {Table} from 'react-bootstrap';

import AccountItem from './AccountItem';

export default class AccountHistory extends React.Component {
  render () {
    let allHistory = this.props.history.map((item, i) => {
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
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
        {allHistory} 
        </tbody>
      </Table>
      <h1>{this.props.balance}</h1>
      </div>
      )
  }
}