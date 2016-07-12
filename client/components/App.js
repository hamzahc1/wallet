import React from 'react';

import Header from './Header';
import AccountHistory from './AccountHistory';
import AccountItem from './AccountItem';

export default class App extends React.Component {

  render(){
    let x = [{'amount': 10, 'date':'today'}, {'amount': 20, 'date':'yesterday'}];
    return(
    <div>
    <Header />
    <AccountHistory history = {x} />
    </div>
    )
  }
}