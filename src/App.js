import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function ReturnSai(props){
  return <div>child 1! {props.children}</div>
}

function NewElement(props){
  return <div>Child 2! {props.children}</div>
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Sample</h1>
        <ReturnSai>This is  rendering!! - Not sure why it has to so tough!</ReturnSai>
        <NewElement>Passing in to  child 2</NewElement>
      </div>
    )
  }
}

export default App;
