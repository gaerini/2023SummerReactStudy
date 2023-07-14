import Dice from './Dice';


function Board ({name, color, gameHistory}) {
    //num과 sum을 히스토리로부터 직접적으로 계산한다.
    const num = gameHistory[gameHistory.length - 1] || 1;
    const sum = gameHistory.reduce((a, b) => a + b, 0);
    return (
            <div>
                <h2>{name}</h2>
                <Dice color={color} num={num} />
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>기록</h2>
                <p>{gameHistory.join(', ')}</p>
            </div>
    );
}

export default Board; //다른 곳에서도 사용할 수 있도록 기본으로 내보내는 것