import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { routes } from '../routes';

const SwitchRouteInner = ({match}) => (
  <Switch>
    {
      routes.map((route) => {
        const Component = route.component;
        // console.log('props', match.url + route.path);
        return (
          <Route 
            key={match.url + route.path}
            exact={route.isExact}
            path={route.path}
            render={(props) => console.log(props) || <Component {...props} redirect={route.redirect} innerComponent={route.innerComponent} />}
          />
        );
      })
    }
  </Switch>
);

export const  SwitchRoute = withRouter(SwitchRouteInner);
