import React from 'react';
import { Switch, Route} from "react-router-dom";
import {MainPage, LoginPage, NewsPage, ProfilePage, NotFoundPage, AuthRoute, LogoutRoute} from './containers';


const routes = [
  {
    isExact: true,
    path: '/',
    component: MainPage
  },
  {
    isExact: true,
    path: '/login',
    component: LoginPage
  },
  {
    isExact: true,
    path: '/news',
    component: NewsPage
  },
  {
    isExact: true,
    path: '/profile',
    component: AuthRoute,
    innerComponent: ProfilePage,
    redirect: '/login'
  },
  {
    isExact: true,
    path: '/logout',
    component: LogoutRoute,
    redirect: '/'
  },
  {
    isExact: false,
    path: '*',
    component: NotFoundPage,
  },
]

export const Routes = () => (
    <Switch>
      {
        routes.map( (route) => {
          const Component = route.component;
          return  <Route 
                    key={route.path}
                    exact={route.isExact}
                    path={route.path}
                    render={(props) => <Component {...props} redirect={route.redirect} innerComponent={route.innerComponent} />}
                  />
          
        })
      }
    </Switch>
)

{/* <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/news" component={NewsPage} />
      <AuthRoute exact path="/profile" component={ProfilePage} redirect='/login' />
      <LogoutRoute exact path="/logout" redirect='/' />
      <Route component={NotFoundPage} /> */}
