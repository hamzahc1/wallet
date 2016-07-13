import React from 'react';
import {FormGroup, FormControl, Button, HelpBlock, InputGroup, ButtonToolbar} from 'react-bootstrap';

export default class Transaction extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      deposit: '',
      withdrawal: ''
    }
  }

  getWithdrawalValidationState() {
    if (Number(this.state.withdrawal) <= this.props.balance && Number(this.state.withdrawal) > 0) {
      return 'success';
    }
    else if (Number(this.state.withdrawal) > this.props.balance) {
      return 'error';
    }
  }

  getAdditionValidationState() {
    if (Number(this.state.deposit) > 0) {
      return 'success';
    } else if (Number(this.state.deposit) <=0 && this.state.deposit !== '') {
      return 'error';
    }
  }

  handleAddChange = (e) => {
    this.setState({ deposit: e.target.value });
  }

  handleWithdrawChange = (e) => {
    this.setState({withdrawal: e.target.value});
  }

  processTransac = (type, value) => {
    let transac = {};
    if(type === 'add') {
      transac.amount = value;
      this.setState({
        deposit:''
      })
    } else if (type === 'withdraw') {
      transac.amount = -1 * value;
      this.setState({
        withdrawal:''
      })
    }
    transac.date = Date.now()

    this.props.newTransac(transac)
  }

//Randomly removes an amount from user's wallet
  generateRandom = () => {
    return Math.abs(Math.ceil(Math.random() * this.props.balance));
  }

  render() {
    return (
      <div>
      <form>
        <FormGroup
          validationState={this.getAdditionValidationState()}
        >
          <FormControl
            type="text"
            value={this.state.deposit}
            placeholder="Enter deposit amount"
            onChange={this.handleAddChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button bsStyle='success' href ='#' disabled = {this.getAdditionValidationState() === 'success' ? false : true} onClick ={()=>{this.processTransac('add', this.state.deposit)}}>Add</Button>
      </form>
      <br/>
      <form>
        <FormGroup
          validationState={this.getWithdrawalValidationState()}
        >
          <FormControl
            type="text"
            value={this.state.withdrawal}
            placeholder="Enter withdrawal amount"
            onChange={this.handleWithdrawChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <ButtonToolbar>
        <Button bsStyle='danger' href ='#' disabled ={this.getWithdrawalValidationState() === 'success' ? false : true} onClick ={()=>{this.processTransac('withdraw', this.state.withdrawal)}}>Withdraw</Button>

        <Button bsStyle='warning' href ='#' disabled ={this.props.balance < 1 ? true : false} onClick ={()=>{this.processTransac('withdraw', this.generateRandom())
      }}>Roulette Withdrawal</Button>
      </ButtonToolbar>
      </form>
      </div>
    );
  }
};