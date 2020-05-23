import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Example from "./pages/Example";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Example} />
      </Switch>
    </BrowserRouter>
  );
}
