import React, { Component } from "react";

class BtnChoiceColor extends Component {
  render() {
    const btn = this.props.btn;
    return (
      <button className="btn" onClick={() => this.props.handleChangeColor(btn.srcCar)}>
        <img src={btn.srcIcon} alt="hinh" style={{ width: 50 }} />
      </button>
    );
  }
}

export default BtnChoiceColor;
