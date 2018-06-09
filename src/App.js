import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList, Form} from './Github'

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  )
};

class Button extends Component {
  handleClick = () => {
    this
      .props
      .onClickFunc(this.props.incrementValue);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    )
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      helloWorld: 'Hello world!!!',
      counter: 0,
      cards: []
    }
  }
  handleWow = () => {
    this.setState({helloWorld: 'Wow!'})
  }
  incrementCounter = (incVal) => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + incVal
      }
    });
  }
  addNewCard = (card) => {
    this.setState((prevState) => {
      return {
        cards: prevState
          .cards
          .concat(card)
      }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to a React app by Noah Prail!</h1>
        </header>
        <p className="App-intro">
          {this.state.helloWorld}
          <br/>
          <button onClick={this.handleWow}>Wow</button>
        </p>
        <br/>
        <Button incrementValue={1} onClickFunc={this.incrementCounter}></Button>
        <Button incrementValue={5} onClickFunc={this.incrementCounter}></Button>
        <Button incrementValue={10} onClickFunc={this.incrementCounter}></Button>
        <Result counter={this.state.counter}></Result>
        <br/>
        <Form onSubmit={this.addNewCard}></Form>
        <CardList cards={this.state.cards}></CardList>
      </div>
    );
  }
}

export default App;
