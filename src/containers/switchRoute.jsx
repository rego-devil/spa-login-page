import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { routes } from '../routes';

const SwitchRouteInner = (props) => (
  console.log('props', props) || 
  <Switch>
    {
      routes.map((route) => {
        const Component = route.component;
        console.log('props', props.match.url + route.path);
        return (
          <Route 
            key={props.match.url + route.path}
            exact={route.isExact}
            path={route.path}
            render={(props) => <Component {...props} redirect={route.redirect} innerComponent={route.innerComponent} />}
          />
        );
      })
    }
  </Switch>
);

export const  SwitchRoute = withRouter(SwitchRouteInner);
