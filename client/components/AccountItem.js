import React from 'react';

export default class AccountItem extends React.Component {
  render () {
    return (
      <tr>
        <td>£ {Number(this.props.amount).toFixed(2)}</td>
        <td>{(new Date(this.props.date)).toString()}</td>
      </tr>
      )
  }
}