import  { Component } from 'react';
import ScrollBox from "./ScrollBox";


class App extends Component {
    render() {
        console.log("::::::::::::::::::::::::: Ch05 - 실행 환경 : " ,  process.env.NODE_ENV);
        console.log("::::::::::::::::::::::::: App.js ");

        return (
          <ScrollBox/>
        );
    }
}

export default App ;
