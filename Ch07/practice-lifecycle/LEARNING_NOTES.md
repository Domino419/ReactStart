# React 컴포넌트의 라이프 사이클 메서드 

## 1. 마운트(Mount) 단계
컴포넌트가 처음 화면에 나타날 때 실행되는 흐름.

1. **constructor**
   - 클래스 컴포넌트에서 state 초기화, 메서드 바인딩 등을 처리.
2. **render**
   - JSX를 반환하여 화면에 그린다.
3. **componentDidMount**
   - 컴포넌트가 실제 DOM에 부착된 직후 호출.
   - API 호출, 이벤트 등록, DOM 조작 등을 수행.

👉 함수형 컴포넌트에서는 `useEffect(() => { ... }, [])`가 `componentDidMount`와 동일한 역할을 한다.

---

## 2. 업데이트(Update) 조건
컴포넌트가 이미 화면에 존재하는 상태에서 다시 렌더링되는 경우.

- **state 변경**: `this.setState()` 또는 `useState`의 setter로 값이 바뀔 때
- **props 변경**: 부모 컴포넌트가 전달하는 props 값이 달라질 때
- **forceUpdate 호출**: 강제로 렌더링을 트리거할 때 (잘 쓰이지 않음)

---

## 3. 업데이트(Update) 단계
업데이트 시 호출되는 주요 메서드.

1. **render**
   - 새로운 UI를 그린다.
2. **componentDidUpdate**
   - DOM이 실제로 업데이트된 뒤 호출.
   - 이전 props/state와 비교해 후처리를 할 수 있다.

👉 함수형 컴포넌트에서는 `useEffect(() => { ... }, [deps])`로 특정 값이 바뀔 때만 실행되도록 한다.

---

## 📌 요약
- **마운트 시 호출**: `constructor` → `render` → `componentDidMount`
- **업데이트 조건**: state 변경, props 변경, forceUpdate
- **업데이트 시 호출**: `render` → `componentDidUpdate`


# 7.2 라이프사이클 메서드 살펴보기 
