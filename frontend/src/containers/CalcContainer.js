import '../css/IpCalc.css';

import React, {Component} from "react";

import IpCalcTable from "../components/IpCalcTable";
import CalcForm from "../components/CalcForm";

class IpCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subnet: '',
      split_prefix: ''
    }

    this.setSubnet = this.setSubnet.bind(this);
  }

  setSubnet(subnet) {
    this.setState({subnet: subnet});
  }

  render() {
    if (!this.state.subnet) {
      return (<div>
        <CalcForm setSub={this.setSubnet} />
      </div>)
    } else {
          console.log(this.state.subnet)

      return (<div>
        <CalcForm setSub={this.setSubnet} />
        <IpCalcTable subnet={this.state.subnet} />
      </div>)
    }
  }
}

export default IpCalc;
