import '../css/IpCalc.css';

import React, {Component} from "react";

import IpCalcTable from "../components/calc/IpCalcTable";
import CalcForm from "../components/calc/CalcForm";

class IpCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageContent: null,
      tableContent: [],
      tableError: null
    }

    this.setTableContent = this.setTableContent.bind(this);
  }

  setTableContent = (data) => {
    this.setState(state => ({tableContent: data}));
  }

  render() {
    if(this.state.tableContent.length === 0){
      return <CalcForm setSplit={this.setTableContent} />
    } else {
      return (<div>
        <CalcForm setSplit={this.setTableContent} />
        <div className="calcTable">
        <IpCalcTable data={this.state.tableContent} />
        </div>
      </div>)
    }
  }
}

export default IpCalc;
