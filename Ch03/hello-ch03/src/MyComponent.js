const MyComponent = props => {
    console.log("::::::::::::::::::::::::::::::::::::::::: MyComponent.js ");
    return <div> 안녕하세요! 제 이름은 {props.name} 입니다.  </div> ; 
}; 

MyComponent.defaultProps = {
    name : "기본이름"
} ;



 // 다른 파일에서 이 파일을 import할 때 위에서 선언한 MyComponent를 불러오도록 설정하는 부분 
export default MyComponent ;  
