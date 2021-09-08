import React, { Component } from "react";

class ModalCart extends Component {
  renderCartList = () => {
    const { cartList } = this.props;
    // dùng map để render
    return cartList.map((cart, index) => (
      <tr className="card-item" key={index}>
        <td>{index + 1}</td>
        <td>{cart.tenSP}</td>
        <td>
          <img src={cart.hinhAnh} width="50" alt="" />
        </td>
        <td>
          <button onClick={() => this.props.handleDecrease(cart)}>-</button>
          {cart.soLuong}
          <button onClick={() => this.props.handleIncrease(cart)}>+</button>
        </td>
        <td>{cart.giaBan}</td>
        <td>{parseInt(cart.soLuong) * cart.giaBan}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleDeleteCart(cart);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document" style={{ maxWidth: 1000 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderCartList()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCart;
