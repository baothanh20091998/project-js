import React, { Component } from "react";

class Car extends Component {
  render() {
    return <img className="img-thumbnail" src={this.props.carImg} alt="hinh" />;
  }
}

export default Car;
