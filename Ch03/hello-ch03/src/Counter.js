// 3.4.11 state 객체 안에 여러 값이 있을 때 

import  { Component } from 'react';


class Counter extends Component {
    constructor(props) {
        super(props)  ; 
            // state의 초기값 설정 
        this.state ={
            number : 0 , 
            fixedNumber : 0
         };
    }
    render() {
        const { number, fixedNumber } =this.state ; // state 를 조회할 때는 this.state로 조회
        console.log("::::::::::::::::::::::::::::::::::::::::: Counter.js ");
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>   
                <h1> {number} </h1>
                <h2> 바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정 
                onClick={() => {
                    console.log("::::::::::::::::::::::::::::::::::::::::: number : " , {number,fixedNumber });
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