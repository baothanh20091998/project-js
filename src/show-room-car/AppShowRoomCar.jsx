/**
 * b1: xây UI
 * b2: state lưu những gì ?
 * b3: hành động của người dùng ?
 */
import React, { Component } from "react";
import BtnChoiceColor from "./BtnChoiceColor";
import Car from "./Car";
import "./styles.scss";
class AppShowRoomCar extends Component {
  state = {
    carImg: "./img/car/products/black-car.jpg",
    listBtnChoiceColor: [
      {
        id: 1,
        srcIcon: "./img/car/icons/icon-black.jpg",
        srcCar: "./img/car/products/black-car.jpg",
      },
      {
        id: 2,
        srcIcon: "./img/car/icons/icon-red.jpg",
        srcCar: "./img/car/products/red-car.jpg",
      },
      {
        id: 3,
        srcIcon: "./img/car/icons/icon-silver.jpg",
        srcCar: "./img/car/products/silver-car.jpg",
      },
      {
        id: 4,
        srcIcon: "./img/car/icons/icon-steel.jpg",
        srcCar: "./img/car/products/steel-car.jpg",
      },
    ],
  };
  handleChangeColor = (carImg) => {
    this.setState({
      carImg: carImg,
    });
  };
  renderListChoiceColor = () => {
    return this.state.listBtnChoiceColor.map((btn, index) => (
      <BtnChoiceColor handleChangeColor={this.handleChangeColor} btn={btn} key={index} />
    ));
  };
  render() {
    return (
      <section className="show-room">
        <h2 className="text-center title">Show Room Car</h2>
        <h5 className="text-center title">Hãy chọn màu xe bạn muốn</h5>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">{this.renderListChoiceColor()}</div>
          <div className="car mt-2">
            <Car carImg={this.state.carImg} />
          </div>
        </div>
      </section>
    );
  }
}

export default AppShowRoomCar;
