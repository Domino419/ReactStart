// 3.4.1 클래스형 컴포넌트의 state

import  { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)  ; 
            // state의 초기값 설정 
        this.state ={
            number : 0 
         };
    }
    render() {
        const { number } =this.state ; // state 를 조회할 때는 this.state로 조회

        console.log("::::::::::::::::::::::::::::::::::::::::: Counter.js ");

        return (
            <div>
                <h1> {number} </h1>
                <button
                // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정 
                onClick={() => {
                    this.setState({ number:number+1}) ; 
                }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter ;