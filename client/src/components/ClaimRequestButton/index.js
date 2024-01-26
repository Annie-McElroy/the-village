import React, { Component } from "react";
import Button from '@mui/material/Button';


class ClaimRequestButton extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(e) {
    this.setState({ clicked: true });
  }
  render() {

    console.log('Claims button')

    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClick} disabled={this.state.clicked}> 
        {this.state.clicked ? 'Request has been claimed!' : 'Claim Request' }
        </Button>
{/* need to find a way to attach the disabled button to a closed request */}
      </div>
    )
  }
}

export default ClaimRequestButton;
