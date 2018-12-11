import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Header} from './header';
import { Row, Col, Grid } from 'react-bootstrap';
import {siteData, getNews} from '../redux/actions';
// import {loginData as data} from '../data/login';

class Container extends React.Component {
  componentWillMount() {
    // this.props.getNews();
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
      setSiteData: (data) => dispatch(siteData(data)),
      getNews: (data) => dispatch(getNews(data)),
  }))(Container)
)

// export const Layout = Container;