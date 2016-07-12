import React from 'react';

export default class AccountItem extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.amount}</td>
        <td>{this.props.date}</td>
      </tr>
      )
  }
}