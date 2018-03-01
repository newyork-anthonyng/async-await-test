import React, { Component } from 'react';
import getData from "./getData";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: ""
    }
  }
  
  async componentDidMount() {
    const data = await getData();
    
    this.setState({
      name: data.name
    });
  }
  
  render() {
    return (
      <h1>Name: {this.state.name}</h1>
    );
  }
}

export default App;
