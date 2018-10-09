import React from 'react';
import { Switch, Route} from "react-router-dom";
import {MainPage, LoginPage, NewsPage, ProfilePage, LogoutPage, AuthPage, NotFoundPage, AuthRoute, LogoutRoute} from './containers';


export const Routes = () => (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/news" component={NewsPage} />
      <AuthRoute exact path="/profile" component={ProfilePage} redirect='/login' />
      <LogoutRoute exact path="/logout" redirect='/' />
      <Route path="*" component={NotFoundPage} />
    </Switch>
)
