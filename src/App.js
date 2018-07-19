import React, { Component } from 'react';
import Header from './Header';
// import Card from '.Card';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App tc ">
        <Header />
        {/* <Card /> */}
      </div>
    );
  }
}

export default App;
