import React from 'react';
import Immutable from 'immutable';

import Header from './Header';
import AccountHistory from './AccountHistory';
import AccountItem from './AccountItem';
import Transaction from './Transaction'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountHistory: localStorage.history ? Immutable.List(JSON.parse(localStorage.history)) : Immutable.List()
      // balance: calcBalance(accountHistory)
    }
  }

  componentWillUpdate (newProps, newState) {
    if(localStorage.history !== newState.history) {
      localStorage.history = JSON.stringify(newState.history);
    }
  }

  newTransaction = (transac) => {
    let newHistory = this.state.accountHistory.unshift(transac)
    console.log(newHistory)
    // let newBalance = calcBalance(newHistory)
    this.setState({
      accountHistory: newHistory
      // balance: newBalance
    })
  }

  render(){
    // let x = [{'amount': 10, 'date':'today'}, {'amount': 20, 'date':'yesterday'}];
    let y = 10;
    return(
    <div>
    <Header />
    <AccountHistory history = {this.state.accountHistory} />
    <Transaction balance = {y} newTransac = {this.newTransaction} />
    </div>
    )
  }
}