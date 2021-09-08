import React, { Component } from "react";
import { connect } from 'react-redux';


class KetQua extends Component {
  render() {
    return (
      <div>
        <div>
          Bạn chọn : <span className="text-danger">
            {this.props.banChon ? 'Tài' : 'Xỉu'}
          </span>
        </div>
        <div>
          Số bàn thắng : <span className="text-success">
            {this.props.soBanThang}
          </span>
        </div>
        <div>
          Tổng số bàn chơi : <span className="text-warning">
            {this.props.soBanChoi}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    banChon: rootReducer.xucXac.banChon,
    soBanThang: rootReducer.xucXac.soBanThang,
    soBanChoi: rootReducer.xucXac.soBanChoi
  };
}

const ComponentXucXac = connect(mapStateToProps)(KetQua); //HOC 

export default ComponentXucXac;
