import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Header} from './header';
import {siteData} from '../redux/actions';
// import {loginData as data} from '../data/login';

class Container extends React.Component {
  componentWillMount() {
    // this.props.setSiteData(data);
  }

  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="wrapper">
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
  
}

export const Layout = withRouter(connect((state) => ({
    isAuthenticated: state.session.isAuthenticated
  }),(dispatch) => ({
      setSiteData: (data) => dispatch(siteData(data)) 
  }))(Container)
)

// export const Layout = Container;