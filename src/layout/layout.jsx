import React from 'react';
import {Header} from './header';

export const Layout = ({children}) => (
  <React.Fragment>
      <Header />
      <div className="wrapper">
        {children}
      </div>
  </React.Fragment>
)