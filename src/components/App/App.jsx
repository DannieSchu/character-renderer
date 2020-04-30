import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CharacterRenderer from '../../containers/CharacterRenderer/CharacterRenderer.jsx';
import CharacterDetail from '../../containers/CharacterDetail/CharacterDetail.jsx';
import Header from '../Header/Header.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={CharacterRenderer} />
          <Route exact path="/:name" component={CharacterDetail} />
        </Switch>
      </Router>
    </>
  );
}
