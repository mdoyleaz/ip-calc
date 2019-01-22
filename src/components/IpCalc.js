import '../css/IpCalc.css';

import React, {Component} from 'react';

class IpCalcTable extends Component {
  state = {
    subnet: "192.168.0.0",
    prefix: "24",
    split: "30",
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

  tableData() {
    this.setSubnet('192.168.0.0');

    let {subnet, prefix, split} = this.state;

    const url = `http://127.0.0.1:5000/api/ipcalc/subnet=${subnet}&prefix=${prefix}&split=${split}`

    fetch(url).then(response => response.json()).then(data => this.setState({
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

  componentDidMount() {

    this.tableHeaders();
    this.tableData();
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
    return (
      <IpCalcTable />
    )
  }
}

export default IpCalc;
