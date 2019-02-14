import '../css/IpCalc.css';

import React, {Component} from 'react';

class IpCalcTable extends Component {

  state = {
    subnet: "",
    split_prefix: 30,
    headers: [],
    content: [],
    isLoading: true,
    error: null
  };

  setSubnet = (subnet) => this.setState({subnet: subnet})

  tableHeaders() {
    const headers = [
      "#",
      "New Subnet",
      "Gateway",
      "Broadcast",
      "Netmask",
      "Actions"
    ]

    let headerData = [];

    headers.forEach(header => {
      headerData.push(<th>{header}</th>);
    })

    this.setState({
      headers: <tr>{headerData}</tr>
    })
  }

  splitTableData() {
    console.log(this.props)
    this.setState({subnet: this.props.subnet})
    let {subnet, split_prefix} = this.state;
    const url = `http://127.0.0.1:5000/api/calc/split`
    const httpRequest = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({subnet: subnet, split_prefix: split_prefix})
    }
    console.log(httpRequest.body)
    fetch(url, httpRequest).then(response => response.json()).then(data => this.setState({
      content: data.map((row, index) => {
        return (<tr>
          <th scope="row">{index + 1}</th>
          <td >{row.subnet}</td>
          <td >{row.gateway}</td>
          <td >{row.broadcast}</td>
          <td>{row.netmask}</td>
          <td>
            <button className='btn btn-primary'>Button</button>
          </td>
        </tr>)
      }),
      isLoading: false
    })).catch(error => this.setState({error, isLoading: false}));
  }

  subnetDetails() {

  }

  componentDidMount() {

    this.tableHeaders();
    this.splitTableData();
  }

  render() {

    const {content, headers, error} = this.state;
    if (error) {
      return <h3>Failled to access API</h3>
    } else {
      return (<table className="table table-hover table-responsive table-striped">
        <thead>
          {headers}
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>);
    }
  }
};

class IpCalc extends Component {
  render() {
    return (<IpCalcTable/>)
  }
}

export default IpCalc;
