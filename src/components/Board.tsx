import Tiles from './Tiles';
import classes from './Chessboard.module.css';

export const BackBoard = () => {
    let board : JSX.Element[] = [];

    const horizontalAxis: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const verticalAxis: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

    for (let j = 7; j > -1; j--) {
        for (let i = 0; i < 8; i++) {
            board.push(
                <Tiles
                    numberH={i}
                    numberV={j}
                    key={horizontalAxis[i] + ' ' + verticalAxis[j]}
                ></Tiles>
            );
        }
    }

    return (
        <>
            <div className={classes.chessboard}>{board}</div>
        </>
    );
};
