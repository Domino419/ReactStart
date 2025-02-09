// 4.2.5 onKeyPress 이벤트 핸들링 
/* 키를 눌렀을 때 발생하는 keyPress 이벤트 처리 
*/

import { Component } from 'react';

class EvenPractice425 extends Component {

  state = {
    username: '',
    message: '',
  };

  handleChange = (e) => {
    console.log( '::::::::::::::::::::::::::::::::::::::::: EvenPractice.js --handleChange ::: '+ e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = () => {
    console.log('::::::::::::::::::::::::::::::::::::::::: EvenPractice.js --handleClick ' );
    alert(this.state.username + '::::' + this.state.message);
    this.setState({
      message: '',
      username: '',
    });
  }

  handleKeyPress =(e)=>{
    if(e.key ==='Enter'){
        console.log(':::::::::::::::::::::::::::::::::::::::::Enter 로 이벤트 발생 ' );
        this.handleClick() ; 
    }
  }

  render() {
    return (
      <div>
        <h1> 이벤트 연습 ! </h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명 "
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <button onClick={this.handleClick}> 확인 </button>
      </div>
    );
  }
}

export default EvenPractice425;

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
