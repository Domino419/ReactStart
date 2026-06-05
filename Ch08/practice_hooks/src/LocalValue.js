import {useRef} from 'react';

const LocalValue = () => {
    const id = useRef(1); 
    const setId = (n) => {
        id.current = n ; 
    }

    const printId = () => {
        console.log('prindID 함수 안에서 : ', id.current) ; 
    }

    return (
        <div>
            refsample
        </div>
    );
};

export default LocalValue;