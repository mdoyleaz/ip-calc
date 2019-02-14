import React, {Component} from 'react';
import {Button, Form} from 'react-bootstrap';

class CalcForm extends Component {

  state = {
    subnet: '192.168.0.0/24'
  }

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    this.setState({subnet: event.target.value})
  }

  handleSubmit(event) {
    this.props.setSub(this.state.subnet)
  }

  render() {
    return (<div className="App">
      <Form.Group>
        <Form.Label>Subnet</Form.Label>
        <Form.Control onChange={this.handleChange} placeholder="Enter Subnet"/>
        <Button type="submit" onClick={this.handleSubmit}>
          Calculate It</Button>
      </Form.Group>
    </div>);
  }
}


export default CalcForm;
