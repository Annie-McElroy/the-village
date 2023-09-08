import React, { Component } from 'react';

class Crayon extends Component {
  state = {
    crayCount: 3,
    emptyBox: false
  }
  
  render() {
    return (
      <div>
      <hi>Crayons: {this.state.crayCount}</hi>
    </div>
  );
 }
};

export default Crayon;