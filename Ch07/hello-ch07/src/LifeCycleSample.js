import { Component } from 'react';

class LifeCycleSample extends Component {

    state = {
        number : 0, 
        color : null , 
    }

    meRef = null ; // ref를 설정할 부분 

    constructor(props) { 
        super(props) ; 
        console.log("::::::::::::::::::::::::: constructor " );
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("::::::::::::::::::::::::: getDerivedStateFromProps " );
        if(nextProps.color !== prevState.color) {
            return { color : nextProps.color}  ; 
        }
        return null ; 
    }

    componentDidMount() {
        console.log("::::::::::::::::::::::::: componentDidMount " );
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log("::::::::::::::::::::::::: shouldComponentUpdate " , nextProps ,nextState  );
        return nextState.number % 10 !== 4 ; 
    }


    componentWillUnmount() {
        console.log("::::::::::::::::::::::::: componentWillUnmount " );
    }

    handleClick = () => {
        this.setState({
            number : this.state.number + 1 
        })  ; 
    }

    getSnapshotBeforeUpdate(prevProps , prevState) {
        console.log("::::::::::::::::::::::::: getSnapshotBeforeUpdate " );
        if(prevProps.color !== this.props.color) {
            return this.meRef.style.color;
        }
        return null ; 
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("::::::::::::::::::::::::: componentDidUpdate " );
        if(snapshot) {
            console.log("::::::::::::::::::::::::: 업데이트 되기 직전 색상 :  " , snapshot  );
        }
    }

    render() {
        console.log('::::::::::::::::::::::::: render');

        const style = {
            color : this.props.color 
        } ; 

        return (
            <div>
                {/* {this.props.missing.value}    {/* 에러 페이지 실습을 위한 추가  */}  
                <h1 style={style} ref ={ref=>(this.meRef = ref )}>
                    {this.state.number} 
                </h1>
                <p> color : {this.state.color} </p>
                <button onClick={this.handleClick} >더하기 </button>
            </div>
        )
    }
}

export default LifeCycleSample;


