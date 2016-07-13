import React from 'react';

export default class AccountItem extends React.Component {
  render () {
    return (
      <tr>
        <td className = {this.props.amount > 0 ? 'success' : 'danger'}>{Number(this.props.amount).toLocaleString('gb-GB', { style: 'currency', currency: 'GBP' })}</td>
        <td>{(new Date(this.props.date)).toString()}</td>
      </tr>
      )
  }
}