import { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props); //state의 초기값 설정
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회

    return (
      <div>
        <h1>바뀌는 값 : {number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>

        <button
          onClick={() => {
            console.log("버튼 클릭 직후 state:", this.state);
            this.setState({ number: number + 1 }, () => {
              console.log("업데이트 후 state:", this.state);
            });
          }}
        >
          {" "}
          + 1{" "}
        </button>
      </div>
    );
  }
}

export default Counter;
