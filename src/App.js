import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './ListComponent';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      msg: "Hello from the new banner component!",
      data: [
        "First message",
        "Second message",
      ]
    };
  }

  addData = () => {
    let newData = this.state.data;
    newData.push("this is a new line, new line, new line!");

    this.setState({
      data: newData
    });
  }

  render() {
    return (
      <div className="App">
        <input type="button" onClick={this.addData} value={"Click me!"}/>

        <HelloBanner msg={this.state.msg} />
        <ListComponent data={this.state.data} />
      </div>
    );
  }
}


class HelloBanner extends Component {

  render() {
    return (
        <div>
          {this.props.msg}
        </div>
    );
  }
}

export default App;
