import  { Component } from 'react';
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from './ErrorBoundary';


// 랜덤 색상 생성 
function getRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16) ; 
} 


class App extends Component {

  state = {
    color : '#000000' 
  }

  handleClick = () => {
    this.setState({
      color : getRandomColor() 
    }) ; 
    console.log("::::::::::::::::::::::::: color : " ,this.state.color);
  }

    render() {
        console.log("::::::::::::::::::::::::: chap.07 컴포넌트의 라이프 사이클 메서드  , 실행환경 :" ,  process.env.NODE_ENV);

        return (
          <div> 
            <button onClick={this.handleClick}> 랜덤색상 </button>
            <ErrorBoundary>
            <LifeCycleSample color= {this.state.color} />
            </ErrorBoundary>
          </div>
        );
    }
}

export default App ;

