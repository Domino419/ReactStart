import  { Component } from 'react';
import ScrollBox from "./ScrollBox";


class App extends Component {
    render() {
        console.log("::::::::::::::::::::::::: Ch05 - 실행 환경 : " ,  process.env.NODE_ENV);
        console.log("::::::::::::::::::::::::: App.js ");

        return (
            <div>
          <ScrollBox ref = {(ref) => this.ScrollBox=ref}/>
          <button onClick={() => this.ScrollBox.ScrollToBottom()}>
            맨 밑으로 </button>
            </div>
        );
    }
}

export default App ;

/*
onClick = {this.ScrollBox.ScrollToBottom()} 같은 형식으로 작성 하여도 틀린 것은 아니지만, 
컴포넌트가 처음 렌더링될 때는 this.scrollbox값이 undefined 이므로 this.ScrollBox.ScrollToBottom 값을 읽어오는 과정에서 오류가 발생함.
화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 this.ScrollBox.ScrollToBottom 메서드를 실행하면 
버튼을 누를 때 (이미 한번 렌더링을 해서 this.scrollbox)를 설정한 시점) 의 this.ScrollBox.ScrollToBottom 를 읽어와서 실행하므로
오류가 발생하지 않음. */