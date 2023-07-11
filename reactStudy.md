1. 리액트의 JSX는 무조건 하나의 태그로 감싸져야한다. 이 때 사용할 수 있는게 \<Fragment> 태그이다.

2. class -> classNAme  
   for -> htmlFor  
   eventHandler들도 모두 카멜 케이스로 작성해야한다.  

3. \{} 안에 자바스크립트로 선언된 모든 형태의 변수 뿐만 아니라 자바스크립트 표현식도 올 수 있다.

4. 리액트 엘리먼트는 리액트 컴포넌트로 구성하며, 리액트 컴포넌트는 항상 대문자로 시작해야한다.  
ex\)
```JSX
const Hello = () => { //Hello 라는 리액트 컴포넌트
  return <h1>안녕 리액트!</h1>;
};

const element = ( //리액트 엘리먼트
  <>
    <Hello />
    <Hello />
    <Hello />
  </>
);
```

5. 리액트에서 이미지를 불러오기 위해선 해당 위치로부터 import를 해와야한다.  
ex\)  
```JSX
import diceBlue01 from './assets/dice-blue-1.svg';
```