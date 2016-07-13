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
      accountHistory: localStorage.history ? Immutable.List(JSON.parse(localStorage.history)) : Immutable.List(),
        balance: localStorage.balance ? localStorage.balance : 0
    }
  }

  componentWillUpdate (nextProps, nextState) {
    if(localStorage.history !== nextState.accountHistory) {
      localStorage.history = JSON.stringify(nextState.accountHistory);
    }
    if(localStorage.balance !== nextState.balance) {
      localStorage.balance = JSON.stringify(nextState.balance);
    }
  }

  resetAccount = () => {
    localStorage.clear();
    this.setState({
      accountHistory: Immutable.List(),
      balance: 0
    })
  }

  calcBalance = (history) => {
    return history.reduce((acc, curr) => {
     return acc + Number(curr.amount)
      },0)
  }

  newTransaction = (transac) => {
    let newHistory = this.state.accountHistory.push(transac)
    this.setState({
      accountHistory: newHistory,
      balance: this.calcBalance(newHistory)
    })
  }

  render(){
    return(
    <div>
      <Header reset= {this.resetAccount} />
      <div className ='container' style = {{
      maxWidth: 800,
      marginBottom: 40,
    }}>
      <AccountHistory history = {this.state.accountHistory} balance = {this.state.balance} />
      <Transaction balance = {this.state.balance} newTransac = {this.newTransaction} />
      </div>
    </div>
    )
  }
}