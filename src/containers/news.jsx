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
    }

    props.getNews();
  }

  // componentWillMount() {
  //   this.props.getNews();
  // }

  // shouldComponentUpdate(nextProps) {
  //   return true;
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(!isEqual(nextProps.news, prevState.news)) {
      console.log(nextProps.news, prevState.news);
      return {
        news: nextProps.news
      }
    }
    
    return null;
  }

  // componentWillMount() {
  //   // вспомогательная функция для проверки на число
  //   function checkNumber(value) {
  //     return typeof value == 'number';
  //   }


  //   // декоратор, проверяющий типы для f
  //   // второй аргумент checks - массив с функциями для проверки
  //   function typeCheck(f, checks) {
  //     return function(...rest) {
          
  //         let isInvalid = false;

  //         rest.forEach((item, i) => {

  //           if(!checks[i](item)) {
  //             isInvalid = true;
  //           }

  //         });

          
  //         return isInvalid ? 'Incorrect Values' : f.apply(this,rest)
          
  //     }
  //   }

  //   function sum(a, b) {
  //     return a + b;
  //   }

  //   // обернём декоратор для проверки
  //   sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа

  //   // пользуемся функцией как обычно
  //   console.log( sum(1, 2) ); // 3, все хорошо

  //   // а вот так - будет ошибка
  //   console.log( sum(true, null) ); 
  //   console.log(sum(1, ["array", "in"])); // некорректный аргумент номер 1
  // }
  

  render() {
    const {news} = this.state;
    if(!news) return <div>Wait...</div>;
    console.log('render');

    return (
        news.map((item) => (
          <div key={item.id} className="newsItem">
            <h2>{item.title}</h2>
            <div>{item.text}</div>
          </div>
        ))
    )
  }
}

export const NewsPage = withRouter(connect((state) => ({
  news: state.news.data
}),
(dispatch) => ({
  getNews: (data) => dispatch(getNews(data)),
})
)(Container))
