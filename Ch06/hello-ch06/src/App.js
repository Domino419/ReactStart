import  { Component } from 'react';
import IterationSample from "./IterationSample";


class App extends Component {
    render() {
        console.log("::::::::::::::::::::::::: Ch06 - 실행 환경 : " ,  process.env.NODE_ENV);
    
        return (
          <IterationSample/>
        );
    }
}

export default App ;

