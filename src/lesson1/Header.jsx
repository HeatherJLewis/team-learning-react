import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>This app is counting... {this.props.number}</h1>
      </div>
    );
  }
}

export default Header;
