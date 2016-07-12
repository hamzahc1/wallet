import React from 'react';

import Header from './Header';
import AccountHistory from './AccountHistory';
import AccountItem from './AccountItem';
import Transaction from './Transaction'

export default class App extends React.Component {

  render(){
    let x = [{'amount': 10, 'date':'today'}, {'amount': 20, 'date':'yesterday'}];
    let y = 10;
    return(
    <div>
    <Header />
    <AccountHistory history = {x} />
    <Transaction balance = {y} />
    </div>
    )
  }
}