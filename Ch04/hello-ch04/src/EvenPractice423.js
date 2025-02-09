// 4.2.3 임의 메서드 만들기 
/*이벤트에 실행할 자바 스크립트 코드를 전달하는 것이 아니라 함수 형태의 값을 전달한다.*/ 

import { Component } from 'react';

class EvenPractice423 extends Component {

    state ={
        message: ''
    }

/*함수가 호출될 때 this는 호출부에 따라 결정되므로 
클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버림.
이 때문에 임의 메서드가 이벤트로 등록되어도 this가 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩 하는 작업이 필요함.
만약 바인딩 하지 않는 경우에는 undefined 를 가리키게 됨.*/ 
    constructor(props) {
        super(props) ; 
        this.handleChange=this.handleChange.bind(this) ;
        this.handleClick=this.handleClick.bind(this) ;
    }

    handleChange(e) {
        console.log("::::::::::::::::::::::::::::::::::::::::: EvenPractice.js --handleChange ::: ", e.target.value)
        this.setState({
            message:e.target.value 
        }) ; 
    } 

    handleClick(e) {
        console.log("::::::::::::::::::::::::::::::::::::::::: EvenPractice.js --handleClick ")
        alert(this.state.message) ;
        this.setState({
            message:''
        }) ; 
    } 

    render() {
        return (
            <div>
                <h1> 이벤트 연습 ! </h1>
                <input 
                type = "text"
                name="message"
                placeholder='아무거나 입력해 보세요'
                value={this.state.message}
                onChange={this.handleChange}
                />
                <button onClick={ this.handleClick }> 확인 </button>
            </div>
        );
    }
}

export default EvenPractice423;


/*
onClick	입력 필드를 클릭할 때 실행
onFocus	입력 필드가 포커스를 받을 때 실행
onBlur	입력 필드가 포커스를 잃을 때 실행
onKeyDown	키보드를 누르는 순간 실행
onKeyUp	키보드를 눌렀다가 뗄 때 실행
onInput	입력 필드에 값이 입력될 때 실행 (거의 onChange와 유사)
onPaste	사용자가 Ctrl + V 또는 Command + V로 붙여넣기 할 때 실행


e.target	이벤트가 발생한 요소 (<input> 태그 자체)
e.target.value	사용자가 입력한 값
e.type	이벤트 타입 ("change")
e.nativeEvent	실제 브라우저 이벤트 객체 (InputEvent 등)
e.currentTarget	이벤트가 바인딩된 요소 (<input> 태그)
e.bubbles	이벤트가 버블링(상위 요소로 전파)되는지 여부

*/