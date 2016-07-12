import React from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

export default class Transaction extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      depositValue: ''
    }
  }

  getValidationState() {
    const balance = this.props.balance;
    if (this.state.depositValue <= balance) {
      return 'success';
    }
    else if (this.state.depositValue === balance) {
      return 'warning';
    }
    else if (this.state.depositValue > balance) {
      return 'error';
    }
  }

  // isValidAmount = () => {
  //   if (this.state.depositValue <= this.props.balance) {
  //     this.setState({validAmount: true});
  //   }
  //   else if (this.state.depositValue === this.props.balance) {
  //     this.setState({validAmount: true});
  //   }
  //   else if (this.state.depositValue > this.props.balance) {
  //     this.setState({validAmount: false});
  //   }
  // }

  handleChange = (e) => {
    this.setState({ depositValue: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <FormControl
            type="text"
            value={this.state.depositValue}
            placeholder="Enter amount"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button href ='#' disabled ={this.getValidationState() === 'success' ? false : true} onClick ={()=>{console.log("hellow")}}>Add</Button>
        <Button href ='#'>Withdraw</Button>
      </form>
    );
  }
};