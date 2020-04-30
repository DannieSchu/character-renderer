import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CharacterRenderer from '../../containers/CharacterRenderer/CharacterRenderer.jsx';
import Detail from '../Detail/Detail.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterRenderer} />
          <Route exact path="/:name" component={Detail} />
        </Switch>
      </Router>
    </>
  );
}
