import React from 'react';

export class MainPage extends React.Component {
  componentWillMount() {

    // function fn(value) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(value);
    //     }, 1000);
    //   });
    // }

    // console.log('fn', fn().then())
    // fn('AAA').then(result => {
    //       console.log("Fulfilled: " + result);
    //       return fn('BBB')
    //     },
    //     error => {
    //       console.log("Rejected: " + error);
    //     }
    //   ).then((value) => {
    //     console.log('next then',value);
    //     return value;
    //   }).then((value) => {
    //     console.log('next next then',value)
    //   });
  }


  render() {
    return (
      <div>MainPage</div>
    )
  }
}