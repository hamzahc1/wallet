import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

export default class Transaction extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      depositValue: 0
    }
  }

  getValidationState() {
    const balance = this.props.balance;
    if (this.state.depositValue < balance) return 'success';
    else if (this.state.depositValue === balance) return 'warning';
    else if (this.state.depositValue > balance) return 'error';
  }

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
            type="number"
            value={this.state.depositValue}
            placeholder="Enter amount"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
};