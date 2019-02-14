import React, {Component} from 'react';

import Navigation from './components/Navigation';
import CalcContainer from './containers/CalcContainer';

import './css/App.css';

class App extends Component {

  render() {
    return (<div>
      <Navigation />
      <CalcContainer />
    </div>)
  };
}

export default App;
