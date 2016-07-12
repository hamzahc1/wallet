import React from 'react';

export default class Header extends React.Component {
  render(){
    return (
      <div>
      <ul>
      <li>Home</li>
      <li onClick ={this.props.reset}>Reset</li>
      <li> <a href = 'https://github.com/hamzahc1/wallet'>Source</a></li>
      </ul>
      </div>
      )
  }
}