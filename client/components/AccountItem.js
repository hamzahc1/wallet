import React from 'react';

export default class AccountItem extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.amount}</td>
        <td>{(new Date(this.props.date)).toString()}</td>
      </tr>
      )
  }
}