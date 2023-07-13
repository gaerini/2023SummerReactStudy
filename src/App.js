import { useState } from 'react';
import Dice from './Dice';
import Button from './Button';

function App () {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);

    function random(n){
        return Math.ceil(Math.random() * n);
    }

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
    };


    const handlerClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
    };

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handlerClearClick}>처음부터</Button>
            </div>
            <div>
                <h2>나</h2>
                <Dice color="blue" num={num} />
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>기록</h2>
                <p>{gameHistory.join(', ')}</p>
            </div>
        </div>
    );
}

export default App; //다른 곳에서도 사용할 수 있도록 기본으로 내보내는 것