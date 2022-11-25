import { useContext, useEffect } from 'react';
import { GameContext } from './GameContext';

import classes from './Chessboard.module.css';
import { Pieces } from './Pieces';

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export interface Cells {
    numberV: number;
    numberH: number;
    key: string;
    defaultt: boolean;
    onMove: (smth: string) => void;
}

export default function Chessboard() {
    const { movement, Board, setBoard } = useContext(GameContext);

    useEffect(() => {
        let board: Cells[] = [];
        for (let j = 7; j > -1; j--) {
            for (let i = 0; i < 8; i++) {
                board.push({
                    numberV: j,
                    numberH: i,
                    key: horizontalAxis[i] + ' ' + verticalAxis[j],
                    defaultt: true,
                    onMove: (e) => movement(e),
                });
            }
        }
        setBoard(board);
        console.log('DEFAULT PIECES ENTERED');
    }, []);

    return (
        <>
            <div className={classes.chessboard}>
                {Board.map(
                    ({
                        numberV: j,
                        numberH: i,
                        defaultt: d,
                        key: k,
                        onMove: oM,
                    }) => (
                        <Pieces
                            key={k}
                            numberV={j}
                            numberH={i}
                            defaultt={d}
                            onMove={oM}
                        ></Pieces>
                    )
                )}
            </div>
        </>
    );
}
