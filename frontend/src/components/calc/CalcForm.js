import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class CalcForm extends Component {

  state = {
    subnet: ''
  }

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    this.setState({ subnet: event.target.value })
  }

  handleSubmit(event) {
    const httpRequest = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subnet: this.state.subnet, split_prefix: 30 })
    }

    const url = `/api/calc/split`

    fetch(url, httpRequest).then(
      response => response.json()).then(
        response => this.props.setSplit(response));
  }

  render() {
    return (<div className="App">
      <Form.Group>
        <Form.Label>Subnet (ex. 192.168.0.0/24)</Form.Label>
        <Form.Control className='subnet-form' onChange={this.handleChange} placeholder="Enter Subnet" />
        <Button type="submit" onClick={this.handleSubmit}>
          Calculate It</Button>
      </Form.Group>
    </div>);
  }
}

export default CalcForm;
