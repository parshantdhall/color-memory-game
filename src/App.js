import React, {Component} from 'react';
import './App.scss';
import BoxContainer from './components/BoxContainer';

class App extends Component{
  render() {
    return(
      <div className="App">
        <BoxContainer  />
      </div>
    )
  }
}

export default App;
