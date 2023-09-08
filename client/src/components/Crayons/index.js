import React, { Component } from 'react';

class Crayon extends Component {
  state = {
    crayCount: 3,
    emptyBox: false
  }
  
  render() {
    return (
      <div>
      <h1>Crayons: {this.state.crayCount}</h1>
    </div>
  );
 }
};

export default Crayon;