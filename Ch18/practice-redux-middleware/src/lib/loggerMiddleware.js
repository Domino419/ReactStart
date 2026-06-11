const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type); // 액션 타입으로 log를 그룹화함.
  console.log(" 이전 상태 ", store.getState());
  console.log(" 액션 ", action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달.
  console.log(" 다음 상태 ", store.getState()); // 업데이트 상태
  console.groupEnd(); // 그룹 끝 !
};

export default loggerMiddleware;

/*
리덕스 엔진이 미들웨어를 초기화하고 결합하는 방식 
1.리덕스가 처음 실행될 때 store를 먼저 주입
2.그다음 미들웨어들을 체인처럼 연결하기 위해 next를 주입
3. 최종적으로 사용자가 액션을 보낼 때마다 action을 주입받아 동작.
*/
