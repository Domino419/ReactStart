import Counter from "./Counter";

const App = () => {
  console.log("::::::::::::::::::::::::: Ch08.Hooks - 실행 환경 : ", process.env.NODE_ENV) 
  return <Counter />;
};

export default App;
