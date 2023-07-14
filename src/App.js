import Board from './Board';
import { useState } from 'react';
import Button from './Button';

function App () {

    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);

    function random(n){
        return Math.ceil(Math.random() * n);
    }

    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };


    const handlerClearClick = () => {
        setMyHistory([]);
        setOtherHistory([]);
    };
    
    return (
        <div>
            <div>
                <Button color = 'red' onClick={handleRollClick}>던지기</Button>
                <Button color = 'blud' onClick={handlerClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" gameHistory={myHistory} />
                <Board name="상대" color="red" gameHistory={otherHistory} />
            </div>
        </div>
    );
}

export default App; //다른 곳에서도 사용할 수 있도록 기본으로 내보내는 것