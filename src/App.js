import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes.const';
import Intro from './components/Intro/Intro';
import Player from './components/Player/Player';

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path={routes.intro} component={Intro} />
        <Route path={routes.player} component={Player} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
