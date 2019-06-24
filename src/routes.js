import React from "react";
import { Route, Switch } from "react-router-dom";
import H2Omolecule from "./components/H2Omolecule";
import HomePage from "./components/HomePage";
import HydrogenMolecule from "./components/HydrogenMolecule";
import Oxygen from "./components/Oxygen";

const Routes = () => {
  return (
    <Route>
      <div>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/oxygen" component={Oxygen} />
          <Route exact path="/completeReaction" component={H2Omolecule} />
          <Route exact path="/reaction" component={HydrogenMolecule} />
        </Switch>
      </div>
    </Route>
  );
};

export default Routes;
