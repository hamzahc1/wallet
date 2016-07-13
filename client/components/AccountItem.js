import React from 'react';

export default class AccountItem extends React.Component {

  render () {
    let {amount, date} = this.props
    return (
      <tr>
        <td className = {amount > 0 ? 'success' : 'danger'}>{Number(amount).toLocaleString('gb-GB', { style: 'currency', currency: 'GBP' })}</td>
        <td>{(new Date(date)).toString()}</td>
      </tr>
      )
  }
}