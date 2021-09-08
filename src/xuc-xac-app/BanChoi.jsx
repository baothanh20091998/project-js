import React, { Component } from "react";
import XucXacItem from "./XucXacItem";
import { connect } from 'react-redux';

class BanChoi extends Component {


  tinhKetQua = () => {
    let tongDiem = this.props.arrXucXac.reduce((tongDiem, xucXacNN, index) => {
      return tongDiem + xucXacNN.soDiem;
    }, 0);
    return tongDiem > 11 ? 'Tài' : 'Xỉu';
  }


  render() {
    return (
      <div className="row text-center BanChoi">
        <div className="col-4">
          <button className="bg-danger display-4 p-5 text-light" onClick={() => {
            const action = {
              type: 'DAT_CUOC', //Tham số bắt buộc của redux xác định xử lý
              banChon: true // Giá trị cần gửi đi đến redux
            }
            //Sử dụng hàm dispatch để đưa dữ liệu lên redux
            this.props.dispatch(action);

          }}>TÀI </button>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            <img src={this.props.arrXucXac[0].hinhAnh} alt="..." width={50} height={50} />
            <img src={this.props.arrXucXac[1].hinhAnh} alt="..." width={50} height={50} />
            <img src={this.props.arrXucXac[2].hinhAnh} alt="..." width={50} height={50} />
          </div>

          <div className="mt-2">
            <span className="display-4 text-warning">{
              this.props.arrXucXac.reduce((tongDiem, xucXacNN, index) => {
                return tongDiem + xucXacNN.soDiem;
              }, 0)
            }

              - {this.tinhKetQua()}</span>

          </div>
        </div>
        <div className="col-4">
          <button className="bg-dark display-4 p-5 text-light" onClick={() => {
            const action = {
              type: 'DAT_CUOC',
              banChon: false
            }
            //Dùng hàm dispatch để đưa dữ liệu lên redux
            this.props.dispatch(action);
          }}>XỈU </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    arrXucXac: state.xucXac.arrXucXac
  }
}
const ComponentBanChoi = connect(mapStateToProps)(BanChoi);

export default ComponentBanChoi;
