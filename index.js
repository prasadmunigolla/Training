import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Registration from './Registration.js';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
     <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Registration.js" component={Registration} />
    </Switch>
    </BrowserRouter>,
)
