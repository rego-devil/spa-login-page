import React from 'react';

export class NewsPage extends React.Component {
  constructor() {
    super();
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
    return (
      <React.Fragment>
        <div>NewsPage</div>
      </React.Fragment>
    )
  }
}