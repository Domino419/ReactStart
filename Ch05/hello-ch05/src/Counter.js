// 현재 파일 버전은 3414 ver (111page)

import  { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state 를 조회할 때는 this.state로 조회
    console.log('::::::::::::::::::::::::::::::::::::::::: Counter.js ');
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1> {number} </h1>
        <h2> 바뀌지 않는 값 : {fixedNumber}</h2>

        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log(
                  '::::::::::::::::::::::::::::::::::::::::: --- Before :: this.state.'
                );
                console.log(this.state);
                console.log(
                  '::::::::::::::::::::::::::::::::::::::::: --- After :: this.state.'
                );
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
