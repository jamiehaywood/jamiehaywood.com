import { SuspenseLoader } from 'components';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CV, Home } from './pages';

const App: React.FC = () => {
  // console.log(
  //   '%c Thanks for having a look under the hood! Visit https://jamiehaywood.com/cv for my CV',
  //   'background: url(https://cdn.onlinewebfonts.com/svg/img_461669.png); display: block; margin-left: 80px; background-repeat: no-repeat; padding-left: 90px; color: #666666; background-size: 55px 70px;font:18px/70px "Open Sans", sans-serif'
  // );

  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cv" component={CV} />
          {/* <Route exact path='/projects' component={Projects} /> */}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
