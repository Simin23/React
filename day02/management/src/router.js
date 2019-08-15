import React from 'react';
import { Router,Link, Route, Switch } from 'dva/router';
import Header from './components/Header/Header';
// import Niming from './components/Content/Niming/Niming'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Header} />
        {/* <Route path="/niming" component={Niming} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
