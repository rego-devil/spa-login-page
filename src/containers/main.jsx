import React from 'react';

export class MainPage extends React.Component {
  componentWillMount() {

    // function fn(value) {
    //   return new Promise((resolve, reject) => {
    //   });
    // }

    // // console.log('fn', fn().then())
    // fn('AAA').then(result => {
    //       console.log("Fulfilled: " + result);
    //       return fn('BBB')
    //     }
    //   ).then((value) => {
    //     console.log('next then',value);
    //     return value;
    //   }).then((value) => {
    //     console.log('next next then',value)
    //   });
    // const z = fetch('https://my-json-server.typicode.com/typicode/demo/posts').then((response) => {
    //   console.log('v', response)
    //   return response.json();
    // }).then(data => console.log(data))
  }


  render() {
    return (
      <div>MainPage</div>
    );
  }
}
