import { combineReducers } from "redux";
import { xucXacRducer } from "./xucXacReducer";

export const rootReducer = combineReducers({
  //Nơi quản lý state tập trung của toàn ứng dụng
  xucXac: xucXacRducer,
  // gioHang : ...
});
