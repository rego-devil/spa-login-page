import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { routes } from '../routes';

const SwitchRouteInner = (props) => (
  console.log('props', props) || 
  <Switch>
    {
      console.log('props', props.match.url) ||
      routes.map((route) => {
        const Component = route.component;
        
        return (
          <Route 
            key={route.path}
            exact={route.isExact}
            path={props.match.url + route.path}
            render={(props) => <Component {...props} redirect={route.redirect} innerComponent={route.innerComponent} />}
          />
        );
      })
    }
  </Switch>
);

export const  SwitchRoute = withRouter(SwitchRouteInner);
