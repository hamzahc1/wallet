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
      console.log(curr.amount)
     return acc + Number(curr.amount)
      },0)
  }

  newTransaction = (transac) => {
    let newHistory = this.state.accountHistory.push(transac)
    // console.log(newHistory)
    // console.log(this.calcBalance(newHistory))
    this.setState({
      accountHistory: newHistory,
      balance: this.calcBalance(newHistory)
    })
  }

  render(){
    let y = 10;
    return(
    <div>
    <Header reset= {this.resetAccount} />
    <AccountHistory history = {this.state.accountHistory} balance = {this.state.balance} />
    <Transaction balance = {y} newTransac = {this.newTransaction} />
    </div>
    )
  }
}