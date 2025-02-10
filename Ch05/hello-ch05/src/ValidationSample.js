import  { Component } from 'react';
import './ValidationSample.css' ;

class ValidationSample extends Component {
    state = {
        password : '', 
        clicked : false,
        validated : false,
    }

    handleChange =(e) => {  
        console.log("::::::::::::::::::::::::::::::::::::::::: handleChange");
        this.setState({
            password:e.target.value
        }) 
    }


    handleButtonClick =() => {
        console.log("::::::::::::::::::::::::::::::::::::::::: handleButtonClick");
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'  
        }) 
    }


    render() {
        return (
            <div>
                <input
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
                className={
                    this.state.clicked
                      ? ( this.state.validated
                        ? 'success'
                        : 'failure') 
                      : ''
                  }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;