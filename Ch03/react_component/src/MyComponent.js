import PropTypes from "prop-types";

const MyComponent = ({ name , favoriteNumber , children }) => {
console.log({ name, favoriteNumber, children }); // 콘솔에 출력
  return (
    <div>
      <p>-------------------------------------------------</p>
      MyComponent.js < br />
      안녕하세요. 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다. <br /> 

      제가 좋아하는 숫자는 {favoriteNumber} 입니다. 
      <p>-------------------------------------------------</p>
    </div>
  );
};


MyComponent.defaultProps = {
 name: "기본 이름"
};


// MyComponent 컴포넌트의 필수 props 를 지정하거나 props의 타입을 지정할 때 사용한다.
MyComponent.propTypes = {
  name: PropTypes.string , 
  favoriteNumber : PropTypes.number.isRequired
};


export default MyComponent;
