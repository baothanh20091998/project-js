import AppShowRoomCar from "./show-room-car/AppShowRoomCar";
import ShoppingCart from "./shopping-cart/ShoppingCart";
import XucXacApp from "./xuc-xac-app/XucXacApp";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import MainTempate from "./template/main";

function App() {
  return (
    <BrowserRouter>
      {/* gọi component */}
      <Switch>
        <Route exact={true} path="/xuc-xac">
          <MainTempate>
            <XucXacApp />
          </MainTempate>
        </Route>
        <Route exact={true} path="/shopping">
          <MainTempate>
            <ShoppingCart />
          </MainTempate>
        </Route>
        <Route exact={true} path="/showroom-car">
          <MainTempate>
            <AppShowRoomCar />
          </MainTempate>
        </Route>
        <Route exact={true} path="/quan-ly-nhan-vien">
          <MainTempate>
            <AppShowRoomCar />
          </MainTempate>
        </Route>
        <Route>
          <Redirect to="/xuc-xac"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
