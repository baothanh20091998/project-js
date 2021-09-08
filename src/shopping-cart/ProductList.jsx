import React, { Component } from "react";
import Product from "./Product";
class ProductList extends Component {
  renderProdList = () => {
    const { prodList, handleChangeProdDetail, handleAddCart } = this.props;

    // map
    return prodList.map((prod, index) => (
      <div className="col-sm-4" key={index}>
        <Product handleAddCart={handleAddCart} prod={prod} handleChangeProdDetail={handleChangeProdDetail} />
      </div>
    ));
  };
  render() {
    return (
      <div className="container danh-sach-san-pham">
        <div className="row">{this.renderProdList()}</div>
      </div>
    );
  }
}

export default ProductList;
