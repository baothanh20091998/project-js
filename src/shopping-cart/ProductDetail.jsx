import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    const prodDetail = this.props.prodDetail;
    return (
      <div className="row product-detail">
        <div className="col-sm-5">
          <img style={{ width: "445px", height: "445px" }} className="img-fluid" src={prodDetail.hinhAnh} alt="asdas" />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{prodDetail.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{prodDetail.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{prodDetail.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{prodDetail.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{prodDetail.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{prodDetail.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
