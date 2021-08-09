import './App.css';
import React, { useEffect } from 'react';
import Dashboard from './Component/Dashboard';
import Logout from './Component/Logout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './Component/Details';
import Account from './Component/Account';
import Exit from './Component/Exit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          {<Route exact path="/" component={Dashboard} />}
          <Route exact path="/account" component={Account} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/exit" component={Exit} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
