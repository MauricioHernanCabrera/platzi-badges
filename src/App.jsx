import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

export default () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Badges} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
