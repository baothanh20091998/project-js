const initialState = {
  banChon: false,
  soBanThang: 0,
  soBanChoi: 0,
  arrXucXac: [
    { soDiem: 1, hinhAnh: "./img/gameXucXac/1.png" },
    { soDiem: 2, hinhAnh: "./img/gameXucXac/2.png" },
    { soDiem: 3, hinhAnh: "./img/gameXucXac/3.png" },
  ],
};

export const xucXacRducer = (state = initialState, action) => {
  console.log("action", action);

  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;
      return { ...state }; //immutable (bất biến của redux)
    }

    case "BAT_DAU_CHOI": {
      //xử lý kết quả trò chơi
      state.soBanChoi = state.soBanChoi + 1;

      let arrXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        //Mỗi lần lặp sẽ tạo ra 1 số ngẫu nhiên
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //Từ số ngẫu nhiên sẽ tạo 1 object xúc xắc ngẫu nhiên
        let xucXacNgauNhien = {
          soDiem: soNgauNhien,
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
        };

        arrXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.arrXucXac = arrXucXacNgauNhien;
      //Tính tổng điểm
      // let tongDiem = 0;
      // for(let xucNN of arrXucXacNgauNhien) {
      //   tongDiem += xucNN.soDiem;
      // }
      let tongDiem = arrXucXacNgauNhien.reduce((td, xucXacNN, index) => {
        return (td = td + xucXacNN.soDiem);
      }, 0);
      if (
        (tongDiem > 11 && state.banChon) ||
        (tongDiem <= 11 && !state.banChon)
      ) {
        //Cập nhật số bàn thắng
        state.soBanThang += 1;
      }
      return { ...state };
    }
  }

  return state;
};
