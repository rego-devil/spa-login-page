import React from 'react';
import { withRouter } from 'react-router-dom';
import {isEqual} from 'lodash';
import { connect } from 'react-redux';
import {getNews} from '../redux/actions';
export class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };

    props.getNews();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(!isEqual(nextProps.news, prevState.news)) {
      console.log(nextProps.news, prevState.news);
      return {
        news: nextProps.news
      };
    }
    
    return null;
  }


  render() {
    const {news} = this.state;
    if(!news) return <div>Wait...</div>;

    return (
        news.map((item) => (
          <div key={item.id} className="newsItem">
            <h2>{item.title}</h2>
            <div>{item.text}</div>
          </div>
        ))
    );
  }
}

export const NewsPage = withRouter(connect((state) => ({
  news: state.news.data
}),
(dispatch) => ({
  getNews: (data) => dispatch(getNews(data)),
})
)(Container));
