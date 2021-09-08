import React, { Component } from "react";
import BanChoi from "./BanChoi";
import KetQua from "./KetQua";
import { connect } from 'react-redux';
import "./styles.scss";
class XucXacApp extends Component {
  render() {
    return (
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">GAME XÚC XẮC</h3>
          <BanChoi />
        </div>
        <div className="container text-center display-4">
          <KetQua />
          <button className="btn btn-success" style={{ fontSize: 30 }} onClick={() => {
            this.props.dispatch({
              type: 'BAT_DAU_CHOI'
            });
          }}>
            PLAY GAME
          </button>
        </div>
      </div>
    );
  }
}


//Cần lấy dữ liệu thì khai báo mapStateToProps
export default connect()(XucXacApp);
