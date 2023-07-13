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

6. 컴포넌트에 속성을 지정할 수 있다. 이를 prop이라 한다. 컴포넌트 태그에 직접적으로 지정할 수 있고 혹은 컴포넌트 함수에 props를 인수로 받아 처리할 수도 있다.  
```JSX
//App.js
...
<Dice color="blue"/>

//Dice.js
...
function Dice(props){
  console.log(props);
  ...
}
//콘솔창에 blue 나옴
```
props가 너무 반복되서 나올 경우 구조분해할당으로 좀 더 간편하게 해결할 수 있다.  
```JSX
...

function Dice({color="blue", num=1}) { //props를 분해해서 미리 받고 기본값을 지정
    const src = DICE_IMAGES[color][num-1];
    const alt = `${color} ${num}`;
    return <img src={diceImg} alt="주사위" />;
}

...

```  

App.js에서 prop에 숫자를 지정할 때에는 반드시 대괄호에 넣어서 해야한다  
```JSX
...
<Dice  color="red" num={2}/> //2를 그냥 넣지 말고 {2} 넣기
...
```  

7. children  
prop을 주기 위해선 JSX 문법을 이용해서 넣어줘야 했다. 그러나 children을 사용하면 html 문법에 가깝게 사용할 수 있다.
```JSX
function Button({children, onClick}) { //html 문법처럼 사용하고 싶은 인수에 children이라고 한다.
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
```  
  
8. state  
입력에 따라 화면을 그때그때 다르게 하고 싶을 때 기존 html은 페이지를 모두 따로 만들어야 했다. 리액트에서는 state를 활용하여 각각에 대한 상태를 즉각적으로 바꾸고 적용시킬 수 있다.  
<br></br>
state는 App.js에서 import 해야한다.  
```JSX
import { useState } from 'react';
```
useState() 함수는 값이 바뀌는 변수와 변수를 바꾸는 함수를 리턴한다. 따라서 다음과 같이 선언해야한다.  
```JSX
const [num, setNum] = useState(1);
//num은 현재 변수의 값을, setNum은 num을 바꿀 수 있는 함수이다.
```
예를 들면 다음과 같이 setNum()을 사용할 수 있다.
```JSX
    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum); //nextNum으로 num을 바꾼다.
    };

```

9. 참조형 State  
조심해야 할 것은 참조형 자료형에 대해 state 함수를 사용할 때이다. 참조형 자료형은 변하지 않으면 주소값이 안변한다. 리액트는 state가 변한 경우에만 다시 렌더링을 하기 때문에 참조형 자료형을 잘 처리해야 한다. 예를 들면 아래와 같다.  
```JSX
setGameHistory([...gameHistory, nextNum]);
//아예 새로운 배열을 만들어버리는 것이다.
```


