import {Navigate } from 'react-router-dom';

const Mypage = () => {

    const isLoggenIn = false ; 

    console.log("isLoggenIn11:", isLoggenIn); 

    if(!isLoggenIn) {
        return <Navigate to="/login" replace={true} /> ; 
    }



    return (
        <div>
            ~~ 마이 페이지 ~~ 
        </div>
    );
};

export default Mypage;