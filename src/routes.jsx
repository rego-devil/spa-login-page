import React from 'react';
import { Switch, Route} from "react-router-dom";
import {MainPage, LoginPage, NewsPage, ProfilePage} from './containers';
import {NotFound} from './components';

export const Routes = () => (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/news" component={NewsPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route path="*" component={NotFound} />
    </Switch>
)
