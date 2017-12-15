import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

let helloWorld = 'Hello world!!!'
const wow = () => {
  console.log('Wow!')
  helloWorld = 'Wow!'
  ReactDOM.render(
    <App/>, document.getElementById('root'));
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <p className="App-intro">
          {helloWorld}
          <button onClick={wow}>Wow</button>
        </p>
      </div>
    );
  }
}

export default App;
