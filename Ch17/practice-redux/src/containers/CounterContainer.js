import Counter from '../components/Counter';
import {  useSelector , useDispatch } from 'react-redux';
import { decrease, increase } from '../modules/counter';
import { useCallback } from 'react';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number ) ; 
    const dispatch = useDispatch() ; 

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]) ;
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]) ;

  return (
    <div>
      <Counter number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}/>
    </div>
  );
};


export default CounterContainer ; 
