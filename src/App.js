import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Instruments from './Components/Instruments';
import InstrumentDetail from './Components/InstrumentDetail';
import Map from './Components/Map';
import Redireccion from './Components/Link';

export const App = () => {
  return (
    <>
      <Router>
        <Redireccion/>
        <Switch>
          <Route exact path="/" component={Instruments} />
          <Route exact path="/detail/:id" component={InstrumentDetail} />
          <Route exact path="/ubicacion" component={Map} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </>
  );
};
