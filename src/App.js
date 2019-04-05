import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      msg: "Hello banner message!",
      data: [
        "First message",
        "Second message",
      ]
    };
    //necessary to have this work as expected
    this.addData = this.addData.bind(this);
  }

  addData() {
    let newData = this.state.data;
    newData.push("this is a new line, new line, new line!");

    this.setState({
      data: newData
    });
  }

  render() {
    return (
      <div className="App">
        <HelloBanner msg={this.state.msg} data={this.state.data}/>

        <input type="button" onClick={this.addData} value={"Click me!"}/>
      </div>
    );
  }
}


class HelloBanner extends Component {

  render() {
    return (
        <div>
          {this.props.msg}

          {this.props.data.map((val, index) => {
            return <ListItem key={index} txt={val}/>
          })}
        </div>
    );
  }
}

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.txt}</div>
    );
  }
}

export default App;
