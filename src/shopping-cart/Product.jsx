import React, { Component } from "react";

class Product extends Component {
  handleClick = () => {
    const handleChangeProdDetail = this.props.handleChangeProdDetail;
    const prodDetail = this.props.prod;
    handleChangeProdDetail(prodDetail);
  };
  addCart = () => {
    const { handleAddCart, prod } = this.props;
    handleAddCart(prod);
  };
  render() {
    const prod = this.props.prod;
    return (
      <div className="card" style={{ marginBottom: "20px" }}>
        <img className="card-img-top" style={{ height: "338px" }} src={prod.hinhAnh} alt="adsasd" />
        <div className="card-body">
          <h4 className="card-title">{prod.tenSP}</h4>
          <button className="btn btn-success" onClick={this.handleClick}>
            Chi tiết
          </button>
          <button className="btn btn-danger" onClick={this.addCart}>
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
