import React from "react";
import Menu from "./Cocktails/Menu";
import Tirage_name from "./Cocktails/Tirage_name";
import Tirage_hazard from "./Cocktails/Tirage_hazard";
import Tirage_ingredient from "./Cocktails/Tirage_ingredient";
import Tirage_alphabet from "./Cocktails/Tirage_alphabet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div id="main">
        <Switch>
          <Route exact path={'/'}><Tirage_name /></Route>
          <Route path={'/Tirage_hazard'}><Tirage_hazard /></Route>
          <Route path={'/Tirage_ingredient'}><Tirage_ingredient /></Route>
          <Route path={'/Tirage_alphabet'}><Tirage_alphabet /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
