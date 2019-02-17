import '../../css/IpCalc.css';

import React, { Component } from 'react';

class IpCalcTable extends Component {

  tableHeaders = _ => {
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

    return headerData
  }

  tableData = (data) => {

    let tableData = data.map((row, index) => {
      return (<tr key={index}>
        <th scope="row">{index + 1}</th>
        <td >{row.subnet}</td>
        <td >{row.gateway}</td>
        <td >{row.broadcast}</td>
        <td>{row.netmask}</td>
        <td>
          <button className='btn btn-primary'>Button</button>
        </td>
      </tr>)
    })
    return tableData
  }

  render() {
    const data = this.props.data

    if ('error' in data) {
      return (
        <div>
          <h3>API Error</h3>
          <h5>{data.error}</h5>
        </div>
      )
    } else {
      const tableHeaders = this.tableHeaders()
      const tableData = this.tableData(data)
      return (<table className="table table-hover table-responsive table-striped">
        <thead>
          <tr>
            {tableHeaders}
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>);
    }
  }
};

export default IpCalcTable;
