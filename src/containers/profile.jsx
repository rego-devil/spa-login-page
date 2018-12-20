import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../redux/actions';

export class Container extends React.Component {
  componentWillMount() {
    
    this.props.getUser({ id: this.props.userId });
  }

  render() {
    const { userInfo, errorMsg } = this.props;
    if (!userInfo && !errorMsg) return null;
    if (errorMsg) return <div>{errorMsg}</div>;

    if (userInfo) {
      const { languages, social, city } = userInfo;
      return (
        <React.Fragment>
          <div>
            City:
            {' '}
            {city}
          </div>
          <div>languages: </div>
          <ul>
            {
              languages && languages.map(item => <li key={item}>{item}</li>)
            }
          </ul>
          <div>socials: </div>
          <ul>
            {
              social && social.map(item => <li key={item.link}>{item.label}</li>)
            }
          </ul>
        </React.Fragment>
      );
    }
  }
}

export const ProfilePage = withRouter(connect(state => ({
  userId: state.session.id,
  userInfo: state.session.userInfo,
  errorMsg: state.session.errorMsg,
}),
dispatch => ({
  getUser: data => dispatch(getUser(data)),
}))(Container));
