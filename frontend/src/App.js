import React, {Component} from 'react';

import NavigationBarTop from './components/Navigation';
import IpCalc from './components/IpCalc';

import './css/App.css';

class App extends Component {

  render() {
    return (<div>
      <NavigationBarTop/>
      <IpCalc/>
    </div>)
  };
}

export default App;
