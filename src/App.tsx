import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './pages'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/cv' component={Cv} />
        <Route exact path='/projects' component={Projects} /> */}
      </Switch>
    </Router>
  );
}

export default App;
