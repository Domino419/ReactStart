
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({ number, increase , decrease }) => {
    return (
        <div>
      <Counter number={number} onIncrease={increase} onDecrease={decrease}/>      
        </div>
    );
};

const mapStateToProps = state => ({
    number : state.counter.number , 
}) ; 

const mapDispatchToProps = dispatch => ( {
    // 임시 함수 
    increase : () => {
        dispatch(increase() ) ; 
        console.log('increase ') ; 
    } , 
    decrease : () => {
        dispatch(decrease() ) ; 
        console.log ('decrease') ; 
    }, 
}) ; 

export default connect ( 
    mapStateToProps , 
    mapDispatchToProps, 
) (CounterContainer) ;
