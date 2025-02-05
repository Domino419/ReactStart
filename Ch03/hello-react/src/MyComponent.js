const MyComponent = ({ a = "기본이름", b = "테스트BBB", c = "테스트cccc" }) => {
    console.log("::::::::::::::::::::::::::::::::::::::::: MyComponent.js");
    console.log("Props 값 확인:", { a, b, c });

    return (
        <div> 
            안녕하세요? 제 이름은 {a} 입니다. 
        </div>
    ); 
};

export default MyComponent;



// const MyComponent = props => {
//     console.log("::::::::::::::::::::::::::::::::::::::::: MyComponent.js 111");
//     console.log("Props 값 확인:", props);
//     return <div> 안녕하세요???  제 이름은 {props.a} 입니다.   체크 : {props.b}  , 체크 {props.c}   </div> ; 
// }; 

// MyComponent.defaultProps = {
//     a : '기본이름' ,
//     b : `bbb` ,
//     c : "cccc" 
// } ;



//  // 다른 파일에서 이 파일을 import할 때 위에서 선언한 MyComponent를 불러오도록 설정하는 부분 
// export default MyComponent ;  
